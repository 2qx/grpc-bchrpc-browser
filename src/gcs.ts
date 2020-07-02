
// @ts-ignore
import * as siphash from "./siphash.js";

import { Block, Transaction } from "../pb/bchrpc_pb";
import { base64toU8 } from "./util";

function toValue(hi: number, lo: number) {
    if (hi > 0) {
        throw Error("GCS value overflowed 32bits")
    } else {
        return Number(lo >>> 0)
    }
}


export class Filter {


    keySize: number;

    n: number;
    p: number;
    m: number;
    blockHash: Uint8Array;
    filterValues: Set<number>;

    constructor({ blockHash, filterData, p = 19, m = 784931 }:
        { blockHash: Uint8Array | string; filterData: Uint8Array; p?: number; m?: number }) {
        this.blockHash = (typeof blockHash === 'string') ? base64toU8(blockHash) : blockHash
        this.keySize = 16
        this.p = p;
        this.m = m;
        const filterBlob = this._gscFilterToArray(filterData)
        this.n = this._gcsGetFilterSize(filterBlob)
        this.filterValues = this._gcsGetFilterValues(filterBlob, p)
    }

    public match({ hash, data }: { hash: Uint8Array, data: Uint8Array }) {
        const key = hash.subarray(0, this.keySize)
        const modulus = siphash.mul64(this.m, this.n)
        const b = siphash.sipmod(data, key, modulus.hi, modulus.lo)
        return this.filterValues.has(toValue(b[0], b[1]))
    }




    private _gcsGetFilterValues(rawFilter: number[], p: number) {
        // disgard the size bits
        rawFilter = rawFilter.splice(8)

        // Create a Set for the decoded values
        const values: Set<number> = new Set()


        let quo = 0
        let value = 0
        while (rawFilter.length > 0) {
            const i = rawFilter.shift()
            // end of quotent bits
            if (i === 0) {
                // get a block value and store it in the Set
                const remainder = Number("0b" + rawFilter.slice(0, p).join(""))
                const delta = (quo << p) + Number(remainder)
                if (delta > 0) {
                    value += delta
                    values.add(value)
                }
                quo = 0
                // remove the bucket bits
                rawFilter = rawFilter.splice(p)
            } else {
                // increment the quotent
                quo++
            }
        }
        return values
    }

    private _gscFilterToArray(f: Uint8Array) {
        return Array.from(f)
            .map(x => x.toString(2).padStart(8, '0'))
            .join("")
            .split("")
            .map(x => parseInt(x, 2))
    }

    private _gcsGetFilterSize(f: number[]) {
        const sizeN = f.slice(0, 8)
        return parseInt(sizeN.join(""), 2)
    }
}
