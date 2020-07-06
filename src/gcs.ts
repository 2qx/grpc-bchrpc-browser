
// @ts-ignore
import * as siphash from "./siphash.js";

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

    /**
     * Create a Golomb-Rice encoded set filter handler for a particular block.
     * @param blockHash - The hash block corresponding to the filter object.
     * @param filterData - The compact filter for the block.
     */
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

    /**
     * Determine whether some data likely matches the filter.
     * @param data - The public key script or serialized outpoint to be matched
     */
    public match({ data }: { data: Uint8Array }): boolean {
        const dataValue = this._getFilterValue(data)
        return this.filterValues.has(dataValue)
    }

    /**
     * Determine whether a list of Base64 encoded strings likely matches the filter
     * @param values - A list of data as Base64 encoded strings to match
     */
    public matchAllBase64(values : string[]){
        let valuesU8 = values.map(s => base64toU8(s))
        return this.matchAllU8(valuesU8)
    }

    /**
     * Determine whether a list of Uint8Arrays likely matches the filter
     * @param values - A list of data as Uint8Arrays to match
     */
    public matchAllU8(values : Uint8Array[]): boolean {
        const mapFn = (x:Uint8Array) => this._getFilterValue(x)
        const valueList = values.map(mapFn)
        const intersection = this._intersection(this.filterValues, new Set([...valueList]))
        return intersection.values().next().value > 0
    }

    /**
     * Get the numberic value corresponding to the data
     * @param data - A Uint8Array to match
     */
    private _getFilterValue(data: Uint8Array) {
        const key = this.blockHash.subarray(0, this.keySize)
        const modulus = siphash.mul64(this.m, this.n)
        const b = siphash.sipmod(data, key, modulus.hi, modulus.lo)
        return toValue(b[0], b[1])
    }

    private _intersection(setA: Set<number>, setB: Set<number>) {
        let _intersection = new Set()
        for (let elem of setB) {
            if (setA.has(elem)) {
                _intersection.add(elem)
            }
        }
        return _intersection
    }

    /**
     * Parse the compact filter for a block and return a set of numeric values.
     * @param rawFilter - The filter as a binary numeric array
     * @param p - The bucket size of the Golomb encoding
     */
    private _gcsGetFilterValues(rawFilter: number[], p: number): Set<number> {
        // disgard the first 8 bits
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

    /**
     * Transform the filter from an Uint8Array to type number[] of 1/0s 
     * @param f - A Uint8Array to match
     */
    private _gscFilterToArray(f: Uint8Array) {
        return Array.from(f)
            .map(x => x.toString(2).padStart(8, '0'))
            .join("")
            .split("")
            .map(x => parseInt(x, 2))
    }

    /**
     * Get the decimal value of the first eight bits of a binary array
     * @param f - a binary array provided as an array of numbers
     */
    private _gcsGetFilterSize(f: number[]) {
        const sizeN = f.slice(0, 8)
        return parseInt(sizeN.join(""), 2)
    }
}
