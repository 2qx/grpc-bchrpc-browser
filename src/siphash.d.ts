/*!
 *
 * This is a truncated version of the bcoin library for siphash
 *
 *
 * siphash.js - siphash for bcoin
 * Copyright (c) 2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */
/**
 * Javascript siphash 2-4 implementation.
 * Used by bitcoin for compact block relay.
 * @param {Uint8Array} data
 * @param {Uint8Array} key - 128 bit key.
 * @returns {Array} [hi, lo]
 */
export declare function siphash(data: Uint8Array, key: Uint8Array): number[];
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
export declare function sipmod(data: Uint8Array, key: Uint8Array, mhi: number, mlo: number): number[];
export declare function mul64(alo: number, blo: number): {
    hi: number;
    lo: number;
};
