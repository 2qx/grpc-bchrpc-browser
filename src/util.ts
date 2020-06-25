


export async function sha256sha256(ab: Uint8Array): Promise<ArrayBuffer> {
    try {
        return await crypto.subtle.digest('SHA-256', await crypto.subtle.digest('SHA-256', ab))
    } catch (error) {
        throw error
    }
}

export async function hash(a: string | Uint8Array) {
    a = (typeof a === 'string') ? base64toU8(a) : a;
    return await new Uint8Array(
        await sha256sha256(
            new Uint8Array(
                [...a]
            )
        )
    )
}

export async function hashPair(a: string | Uint8Array, b: string | Uint8Array) {
    // If an argument is missing, assume it is a starting hash and return it
    if (!a) { return b };
    if (!b) { return a };

    // Convert base64 strings to Uint8Arrays
    a = (typeof a === 'string') ? base64toU8(a) : a;
    b = (typeof b === 'string') ? base64toU8(b) : b;

    return await new Uint8Array(
        await sha256sha256(
            new Uint8Array(
                [...a, ...b]
            )
        )
    )
}

export function expandMerkleFlags(b: Uint8Array) {
    return Array.from(b)
        .reverse()
        .map(x => x.toString(2).padStart(8, '0'))
        .join("")
        .replace(/\b0+/g, '')
        .split("")
        .map(x => parseInt(x,10))
        .reverse();
}

export function compareUint8Array(a: string | Uint8Array, b: string | Uint8Array) {
    // Convert base64 strings to Uint8Arrays
    a = (typeof a === 'string') ? base64toU8(a) : a;
    b = (typeof b === 'string') ? base64toU8(b) : b;
    for (let i = a.length; -1 < i; i -= 1) {
        if ((a[i] !== b[i])) return false;
    }
    return true;
}

export async function getMerkleRootFromProof(proof: (string | Uint8Array)[], flags: number[], fn: any) {

    // proofCur tracks where in the list of proofs the next one is pulled from
    // count the number of zeros to get the index of the transaction hash in the proof array
    let proofCur = flags.filter(x => x === 0).length;

    // accumulator is the root of the proof walked so far
    let accumulator = null
    for (let i = flags.length - 1; i >= 0;) {
        // If the previous leaf was on the right side, combine it with the hash on the left
        if (flags[i] === 0) {
            proofCur--;
            accumulator = await fn(proof.splice(proofCur, 1).pop(), accumulator)
            flags.pop() // remove the flag indicating that the previous node was on the right
            i--
            flags.pop() // remove the node flag
            i--
        }
        // Otherwise, combine it with the leaf to the right
        else {
            accumulator = await fn(accumulator, proof.splice(proofCur, 1).pop())
            flags.pop() // remove the node flag
            i--
        }
    }
    return accumulator
}

export function numberTo4ByteLEArray(num: number) {
    const byteArray = [0, 0, 0, 0];

    for (let index = 0; index < byteArray.length; index++) {
        const byte = num & 0xff;
        byteArray[index] = byte;
        num = (num - byte) / 256;
    }

    return byteArray;
};


const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const reduceToHex = (s: string, c: number) => s + hexArray[c >>> 4] + hexArray[c & 0x0F]
const reduceToBase64 = (s: string, c: number) => s + String.fromCharCode(c)


export function hexToU8(hashHex: string) {
    return new Uint8Array(hashHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)))
}

export function hexToBase64(hashHex: string) {
    return btoa(hashHex.match(/\w{2}/g)!.map((a) => String.fromCharCode(parseInt(a, 16))).join(""));
}



export function base64toHex(b64: string): string {
    return base64toU8(b64).reduce(reduceToHex, '')

}

export function base64toU8(b64: string) {
    return new Uint8Array(atob(b64).split("").map((c) => c.charCodeAt(0)))
}

export function u8toHex(u8: Uint8Array) {
    return u8.reduce(reduceToHex, '')
}

export function u8toBase64(u8: Uint8Array) {
    return btoa(u8.reduce(reduceToBase64, ''))
}

export function arrayBufferToBase64(ab: ArrayBuffer) {
    return u8toBase64(new Uint8Array(ab))
}

// TODO addressBlockFilterMatch
// P = 19
// M = 784931
// KeySize 16