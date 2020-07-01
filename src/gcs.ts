
// @ts-ignore
import * as siphash from "./siphash.js";


function toValue(hi:number, lo:number){
    return (BigInt(hi>>>0) <<32n) + BigInt(lo>>>0)
}


export default class Filter {
    
        
        keySize:   number;

        n:         number;
        p:         number;
        m:         number;

        filterValues: bigint[];

        constructor({ p = 19, m = 784931, filterData }:
            {  p?: number; m?: number; filterData: Uint8Array }){
                this.keySize = 16
                this.p = p;
                this.m = m;
                const filterArray = this._gscFilterToArray(filterData)
                this.n = this._gcsGetFilterSize(filterArray)
                this.filterValues = this._gcsGetFilterValues(filterArray, p)
        }

        public match(keyU8:Uint8Array, data: Uint8Array){
            const key = keyU8.subarray(0, this.keySize)
            let modulus = siphash.mul64(this.m, this.n)
            let b = siphash.sipmod(data, key, modulus.hi, modulus.lo)
            return this.filterValues.includes(toValue(b[0],b[1]))
        }

        private _gcsGetFilterValues(f: number[], p: number){
            f = f.splice(8)
            let values = [];
            let quo = 0n;
            let value = 0n
            while(f.length > 0) {
                let i = f.shift()
                if(i === 0){
                    let bucket = f.slice(0,p)
                    f = f.splice(p)
                    let bucketStr = "0b"+ bucket.join("")
                    let delta = (quo << BigInt(p)) + BigInt(bucketStr)
                    if(delta>0){
                        value += delta
                        values.push(value)    
                    }
                    quo = 0n
                }else{
                    quo++
                }
            }
            return values
        }

        private _gscFilterToArray(f: Uint8Array){
            return Array.from(f)
                .map(x => x.toString(2).padStart(8, '0'))
                .join("")
                .split("")
                .map(x => parseInt(x, 10))
        }

        private _gcsGetFilterSize(f: number[]){
            let sizeN = f.slice(0,8)
            return parseInt(sizeN.join(""),2)
        }
}
