import { BlockInfo, GetMerkleProofResponse } from "../pb/bchrpc_pb";
export declare function sha256sha256(ab: Uint8Array): Promise<ArrayBuffer>;
export declare function hashSha256(a: string | Uint8Array): Promise<Uint8Array>;
export declare function hashPair(a: string | Uint8Array, b: string | Uint8Array): Promise<string | Uint8Array>;
export declare function expandMerkleFlags(b: Uint8Array): number[];
export declare function compareUint8Array(a: string | Uint8Array, b: string | Uint8Array): boolean;
export declare function getMerkleRootFromProof(proof: (string | Uint8Array)[], flags: number[], fn: any): Promise<any>;
export declare function numberTo4ByteLEArray(num: number): number[];
export declare function numberPairToBase64(hi: number, lo: number): string;
export declare function hexToU8(hashHex: string): Uint8Array;
export declare function hexToBase64(hashHex: string): string;
export declare function base64toHex(b64: string): string;
export declare function base64toU8(b64: string): Uint8Array;
export declare function u8toHex(u8: Uint8Array): string;
export declare function u8toBase64(u8: Uint8Array): string;
export declare function arrayBufferToBase64(ab: ArrayBuffer): string;
export declare function verifyBlock({ block, hash }: {
    block?: BlockInfo;
    hash: string | Uint8Array;
}): Promise<boolean>;
export declare function verifyTransaction({ txnHash, txnHashHex, merkleRoot, merkleRootHex, proof }: {
    txnHash?: string | Uint8Array;
    txnHashHex?: string;
    merkleRoot?: string | Uint8Array;
    merkleRootHex?: string;
    proof: GetMerkleProofResponse;
}): Promise<boolean>;
