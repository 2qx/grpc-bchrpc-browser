/*!
 *
 * This is a truncated version of the bcoin library for siphash
 *
 *
 * siphash.js - siphash for bcoin
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

/*
 * Constants
 */

const HI = 1 / 0x100000000;

/**
 * Javascript siphash 2-4 implementation.
 * @private
 * @param {Uint8Array} data
 * @param {Uint8Array} key - 128 bit key.
 * @returns {Array} [hi, lo]
 */

function _siphash(data:Uint8Array, key:Uint8Array) {

  const blocks = data.length >>> 3;
  const c0 = new U64(0x736f6d65, 0x70736575);
  const c1 = new U64(0x646f7261, 0x6e646f6d);
  const c2 = new U64(0x6c796765, 0x6e657261);
  const c3 = new U64(0x74656462, 0x79746573);
  const f0 = new U64(data.length << 24, 0);
  const f1 = new U64(0, 0xff);
  const k0 = U64.fromRaw(key, 0);
  const k1 = U64.fromRaw(key, 8);

  // Init
  const v0 = c0.ixor(k0);
  const v1 = c1.ixor(k1);
  const v2 = c2.ixor(k0);
  const v3 = c3.ixor(k1);

  // Blocks
  let p = 0;
  for (let i = 0; i < blocks; i++) {
    const d = U64.fromRaw(data, p);
    p += 8;
    v3.ixor(d);
    sipround(v0, v1, v2, v3);
    sipround(v0, v1, v2, v3);
    v0.ixor(d);
  }

  switch (data.length & 7) {
    case 7:
      f0.hi |= data[p + 6] << 16;
    case 6:
      f0.hi |= data[p + 5] << 8;
    case 5:
      f0.hi |= data[p + 4];
    case 4:
      f0.lo |= data[p + 3] << 24;
    case 3:
      f0.lo |= data[p + 2] << 16;
    case 2:
      f0.lo |= data[p + 1] << 8;
    case 1:
      f0.lo |= data[p];
  }
  // Finalization
  v3.ixor(f0);
  sipround(v0, v1, v2, v3);
  sipround(v0, v1, v2, v3);
  v0.ixor(f0);
  v2.ixor(f1);
  sipround(v0, v1, v2, v3);
  sipround(v0, v1, v2, v3);
  sipround(v0, v1, v2, v3);
  sipround(v0, v1, v2, v3);
  v0.ixor(v1);
  v0.ixor(v2);
  v0.ixor(v3);

  return [v0.hi, v0.lo];
}


/**
 * Javascript siphash 2-4 implementation.
 * Used by bitcoin for compact block relay.
 * @param {Uint8Array} data
 * @param {Uint8Array} key - 128 bit key.
 * @returns {Array} [hi, lo]
 */

export function siphash(data:Uint8Array, key:Uint8Array) {
  return _siphash(data, key);
}

/**
 * Javascript siphash 2-4 implementation
 * plus 128 bit reduction by a modulus.
 * Used by the neutrino protocol.
 * @param {Uint8Array} data
 * @param {Uint8Array} key - 128 bit key.
 * @param {Number} mhi - Modulus hi bits.
 * @param {Number} mlo - Modulus lo bits.
 * @returns {Array} [hi, lo]
 */

export function sipmod(data:Uint8Array, key:Uint8Array, mhi:number, mlo:number) {
  const [hi, lo] = _siphash(data, key);
  return reduce64(hi, lo, mhi, mlo);
}


/**
 * U64
 * @ignore
 */

class U64 {

    hi:number;
    lo:number;

  constructor(hi:number, lo:number) {
    this.hi = hi | 0;
    this.lo = lo | 0;
  }

  iadd(b:U64) {
    const a = this;

    // Credit to @indutny for this method.
    const lo = (a.lo + b.lo) | 0;

    const s = lo >> 31;
    const as = a.lo >> 31;
    const bs = b.lo >> 31;

    const c = ((as & bs) | (~s & (as ^ bs))) & 1;

    const hi = ((a.hi + b.hi) | 0) + c;

    a.hi = hi | 0;
    a.lo = lo;

    return a;
  }

  ixor(b:U64) {
    this.hi ^= b.hi;
    this.lo ^= b.lo;
    return this;
  }

  irotl(bits:number) {
    let ahi = this.hi;
    let alo = this.lo;
    let bhi = this.hi;
    let blo = this.lo;

    // a = x << b
    if (bits < 32) {
      ahi <<= bits;
      ahi |= alo >>> (32 - bits);
      alo <<= bits;
    } else {
      ahi = alo << (bits - 32);
      alo = 0;
    }

    bits = 64 - bits;

    // b = x >> (64 - b)
    if (bits < 32) {
      blo >>>= bits;
      blo |= bhi << (32 - bits);
      bhi >>>= bits;
    } else {
      blo = bhi >>> (bits - 32);
      bhi = 0;
    }

    // a | b
    this.hi = ahi | bhi;
    this.lo = alo | blo;

    return this;
  }

  static fromRaw(data:Uint8Array, off:number) {
    const lo = readUInt32LE(data, off);
    const hi = readUInt32LE(data, off + 4);
    return new U64(hi, lo);
  }


}

/*
 * Helpers
 */

function sipround(v0:U64, v1:U64, v2:U64, v3:U64) {
  v0.iadd(v1);
  v1.irotl(13);
  v1.ixor(v0);

  v0.irotl(32);

  v2.iadd(v3);
  v3.irotl(16);
  v3.ixor(v2);

  v0.iadd(v3);
  v3.irotl(21);
  v3.ixor(v0);

  v2.iadd(v1);
  v1.irotl(17);
  v1.ixor(v2);

  v2.irotl(32);
}

// Compute `((uint128_t)a * b) >> 64`
function reduce64(ahi:number, alo:number, bhi:number, blo:number) {
  const axbhi = mul64(ahi, bhi);
  const axbmid = mul64(ahi, blo);
  const bxamid = mul64(bhi, alo);
  const axblo = mul64(alo, blo);

  // Hack:
  const c = (axbmid.lo >>> 0) + (bxamid.lo >>> 0) + (axblo.hi >>> 0);
  const m = (axbmid.hi >>> 0) + (bxamid.hi >>> 0) + ((c * HI) >>> 0);

  // More hacks:
  const mhi = (m * HI) | 0;
  const mlo = m | 0;

  const {hi, lo} = sum64(axbhi.hi, axbhi.lo, mhi, mlo);

  return [hi, lo];
}

function sum64(ahi:number, alo:number, bhi:number, blo:number) {
  // Credit to @indutny for this method.
  const lo = (alo + blo) | 0;

  const s = lo >> 31;
  const as = alo >> 31;
  const bs = blo >> 31;

  const c = ((as & bs) | (~s & (as ^ bs))) & 1;

  const hi = (((ahi + bhi) | 0) + c) | 0;

  return { hi, lo };
}

export function mul64(alo:number, blo:number) {
  const a16 = alo >>> 16;
  const a00 = alo & 0xffff;

  const b16 = blo >>> 16;
  const b00 = blo & 0xffff;

  let c48 = 0;
  let c32 = 0;
  let c16 = 0;
  let c00 = 0;

  c00 += a00 * b00;
  c16 += c00 >>> 16;
  c00 &= 0xffff;
  c16 += a16 * b00;
  c32 += c16 >>> 16;
  c16 &= 0xffff;
  c16 += a00 * b16;
  c32 += c16 >>> 16;
  c16 &= 0xffff;
  c48 += c32 >>> 16;
  c32 &= 0xffff;
  c32 += a16 * b16;
  c48 += c32 >>> 16;
  c32 &= 0xffff;
  c48 += c32 >>> 16;
  c48 &= 0xffff;

  const hi = (c48 << 16) | c32;
  const lo = (c16 << 16) | c00;

  return { hi, lo };
}

function readUInt32LE (data:Uint8Array, offset:number) {
    offset = offset >>> 0
    return ((data[offset]) |
        (data[offset + 1] << 8) |
        (data[offset + 2] << 16)) +
        (data[offset + 3] * 0x1000000)
  }


