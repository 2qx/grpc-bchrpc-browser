import * as grpcWeb from "grpc-web";
import * as bchrpc from "../pb/bchrpc_pb";
import * as bchrpc_pb_service from "../pb/BchrpcServiceClientPb";


export class GrpcClient {

    public client: bchrpc_pb_service.bchrpcClient;

    /**
    * Create a client.
    * @param url - The bchd server expressed as host:port.
    * @param testnet - Whether testnet is being used, default:false.
    * @param options - grpc client options.
    */
    constructor({ url, testnet = false, options }:
        { url?: string; testnet?: boolean; options: null | { [index: string]: string; } }) {
        if (typeof url == 'string') {
            url = url
        } else if (!url && !testnet) {
            url = "https://bchd.fountainhead.cash:443";
            //url = "https://bchd.greyh.at:8335";

        } else if (!url) {
            url = "https://bchd-testnet.greyh.at:18335";
        }
        if (!options) {
            options = {
                "grpc.max_receive_message_length": "-1", // unlimited
            };
        }
        this.client = new bchrpc_pb_service.bchrpcClient(url, null, options);
    }

    /**
    * Get information about transactions in mempool
    * @param metadata - optional parameters for grpcWeb client
    */
    public getMempoolInfo(metadata: grpcWeb.Metadata | null): Promise<bchrpc.GetMempoolInfoResponse> {
        return new Promise((resolve, reject) => {
            this.client.getMempoolInfo(
                new bchrpc.GetMempoolInfoRequest(),
                metadata,
                (err: grpcWeb.Error, response: bchrpc.GetMempoolInfoResponse) => {
                    if (err !== null) { reject(err); } else {
                        resolve(response!);
                    }
                }
            );
        });
    }

    /**
    * Get transactions from mempool
    * @param fullTransactions - A flag to return full transaction data. Default is `false`, only transaction hashes are returned.
    * @param metadata - Optional parameters for grpcWeb client
    */
    public getMempool(
        { fullTransactions }: { fullTransactions?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetMempoolResponse> {
        const req = new bchrpc.GetMempoolRequest();
        if (fullTransactions) {
            req.setFullTransactions(fullTransactions);
        }
        return new Promise((resolve, reject) => {
            this.client.getMempool(
                req,
                metadata,
                (err: grpcWeb.Error, response: bchrpc.GetMempoolResponse) => {
                    if (err !== null) { reject(err); } else { resolve(response!); }
                }
            );
        });
    }

    /**
    * Get a raw transaction
    * @param hash - the hash, in either a base64 encoded string or byte array, little-endian.
    * @param hashHex - the hash as a big-endian hexadecimal encoded string, sill be overridden by hash if provided.
    * @param metadata - Optional parameters for grpcWeb client
    */
    public getRawTransaction(
        { hash, hashHex }:
            { hash?: string | Uint8Array; hashHex?: string },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetRawTransactionResponse> {
        const req = new bchrpc.GetRawTransactionRequest();
        if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        } else {
            throw Error("No hash provided for transaction");
        }

        return new Promise((resolve, reject) => {
            this.client.getRawTransaction(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetRawTransactionResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
    * Get a transaction
    * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
    * @param hashHex - the hash as a big-endian hexadecimal encoded string, will be overridden by hash, if provided.
    * @param metadata - Optional parameters for grpcWeb client
    */
    public getTransaction(
        { hash, hashHex }:
            { hash?: string | Uint8Array; hashHex?: string },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetTransactionResponse> {
        const req = new bchrpc.GetTransactionRequest();
        if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        } else {
            throw Error("No hash provided for transaction");
        }
        return new Promise((resolve, reject) => {
            this.client.getTransaction(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetTransactionResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }


    /**
    * Get block header information
    * @param blockLocatorHashes - Sparse list of hashes known to the client.
    * @param stopHash -Last block hash to return.
    */
    public getHeaders({ blockLocatorHashes, stopHash }:
        {
            blockLocatorHashes?: (string | Uint8Array)[],
            stopHash?: string
        },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetHeadersResponse> {
        const req = new bchrpc.GetHeadersRequest();
        if (blockLocatorHashes) {
            req.setBlockLocatorHashesList(blockLocatorHashes);
        }
        if (stopHash) {
            req.setStopHash(stopHash);
        }
        return new Promise((resolve, reject) => {
            this.client.getHeaders(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetHeadersResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
    * Get transactions related to a particular address
    * @param address - Bitcoin cash address in casharr format.
    * @param nbSkip - Number of transactions to skip, in chronological order.
    * @param nbFetch - Number of transactions return.
    * @param height - Filter to only return transactions after this block number.
    * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
    * @param hashHex - the hash as a big-endian hexadecimal encoded string, will be overridden by `hash`, if provided.
    * @param metadata - Optional parameters for grpcWeb client
    */
    public getAddressTransactions({ address, nbSkip, nbFetch, height, hashHex }:
        {
            address: string,
            nbSkip?: number,
            nbFetch?: number,
            height?: number,
            hashHex?: string
        },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetAddressTransactionsResponse> {
        const req = new bchrpc.GetAddressTransactionsRequest();
        if (nbSkip) {
            req.setNbSkip(nbSkip);
        }
        if (nbFetch) {
            req.setNbFetch(nbFetch);
        }
        if (height) {
            req.setHeight(height);
        }
        if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        }
        req.setAddress(address);
        return new Promise((resolve, reject) => {
            this.client.getAddressTransactions(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetAddressTransactionsResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public getUnspentOutput(
        { hash, hashHex, vout, includeMempool }:
            {
                hash?: string | Uint8Array, hashHex?: string, vout: number,
                includeMempool?: boolean
            }
        , metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetUnspentOutputResponse> {
        const req = new bchrpc.GetUnspentOutputRequest();
        if (includeMempool) {
            req.setIncludeMempool(true);
        }
        if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        }
        req.setIndex(vout);
        return new Promise((resolve, reject) => {
            this.client.getUnspentOutput(req, metadata, (err, data) => {
                if (err !== null) { reject(err); } else { resolve(data!); }
            });
        });
    }

    /**
     * getMerkleProof
     * 
     * Retrieve merkle (SPV) proof that the given transaction is in the provided block.
     * @param hash - the tx hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the tx hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     */
    public getMerkleProof(
        { hash, hashHex }:
            {
                hash?: string | Uint8Array, hashHex?: string
            }
        , metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetMerkleProofResponse> {
        const req = new bchrpc.GetMerkleProofRequest();
        if (hashHex) {
            req.setTransactionHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setTransactionHash(hash);
        }
        return new Promise((resolve, reject) => {
            this.client.getMerkleProof(req, metadata, (err, data) => {
                if (err !== null) { reject(err); } else { resolve(data!); }
            });
        });
    }

    public getAddressUtxos(
        { address, includeMempool }:
            { address: string, includeMempool: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetAddressUnspentOutputsResponse> {
        const req = new bchrpc.GetAddressUnspentOutputsRequest();
        req.setAddress(address);
        if (includeMempool) {
            req.setIncludeMempool(true);
        }
        return new Promise((resolve, reject) => {
            this.client.getAddressUnspentOutputs(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
     * getRawBlock
     * 
     * Retrieve raw block from a hash
     * @param hash - the hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     */
    public getRawBlock(
        { hash, hashHex }:
            { hash?: string | Uint8Array, hashHex?: string },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetRawBlockResponse> {
        const req = new bchrpc.GetRawBlockRequest();
        if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        } else {
            throw Error("No hash provided for raw block request");
        }
        return new Promise((resolve, reject) => {
            this.client.getRawBlock(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }


    /**
     * getBlock
     * 
     * Retrieve block info given a block number or hash
     * @param index - the block number to be retrieved.
     * @param hash - the hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     * @param fullTransactions - a flag to return full transaction data, by defult `false` only transaction hashes are returned.
     */
    public getBlock(
        { index, hash, hashHex, fullTransactions }:
            { index?: number, hash?: string | Uint8Array, hashHex?: string, fullTransactions?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetBlockResponse> {
        const req = new bchrpc.GetBlockRequest();
        if (index !== null && index !== undefined) {
            req.setHeight(index);
        } else if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        } else {
            throw Error("No index or hash provided for block");
        }
        if (fullTransactions) {
            req.setFullTransactions(true);
        }
        return new Promise((resolve, reject) => {
            this.client.getBlock(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
     * getBlockInfo
     * 
     * Retrieve block info given a block number or hash
     * @param height - the block number index to be retrieved.
     * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.
     */
    public getBlockInfo(
        { height, hash, hashHex }:
            { height?: number, hash?: string | Uint8Array, hashHex?: string },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetBlockInfoResponse> {
        const req = new bchrpc.GetBlockInfoRequest();
        if (height !== null && height !== undefined) { req.setHeight(height); } else if (hashHex) {
            req.setHash(this.utilHexToU8(hashHex).reverse());
        } else if (hash) {
            req.setHash(hash);
        } else {

        }
        return new Promise((resolve, reject) => {
            this.client.getBlockInfo(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
     * getBlockchainInfo
     * 
     * Retrieve block info for the network, network state and host node.
     */
    public getBlockchainInfo(
        { }: {},
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetBlockchainInfoResponse> {
        return new Promise((resolve, reject) => {
            this.client.getBlockchainInfo(new bchrpc.GetBlockchainInfoRequest(), metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    /**
     * 
     * @param includeMempoolAcceptance - If true, new unconfirmed transactions from mempool are included apart from the ones confirmed in a block.
     * @param includeBlockAcceptance - If true, transactions are included when they are confirmed. This notification is sent in addition to any requested mempool notifications.
     * @param includeSerializedTxn - If true, transactions are serialized using bitcoin protocol encoding. Default is false, transaction will be Marshaled.
     */
    public subscribeTransactions({ includeMempoolAcceptance, includeBlockAcceptance, includeSerializedTxn }:
        { includeMempoolAcceptance?: boolean, includeBlockAcceptance?: boolean, includeSerializedTxn?: boolean },
    ): Promise<grpcWeb.ClientReadableStream<bchrpc.TransactionNotification>> {
        return new Promise((resolve, reject) => {
            const req = new bchrpc.SubscribeTransactionsRequest();
            includeMempoolAcceptance ? req.setIncludeMempool(true) : req.setIncludeMempool(false);
            includeBlockAcceptance ? req.setIncludeInBlock(true) : req.setIncludeInBlock(false);
            includeSerializedTxn ? req.setSerializeTx(true) : req.setSerializeTx(false);
            const filter = new bchrpc.TransactionFilter();
            filter.setAllTransactions(true);
            req.setSubscribe(filter);
            try {
                resolve(this.client.subscribeTransactions(req));
            } catch (err) {
                reject(err);
            }
        });
    }

    public subscribeBlocks({ includeSerializedBlock, includeTxnHashes, includeTxnData }:
        { includeSerializedBlock?: boolean, includeTxnHashes?: boolean, includeTxnData?: boolean },
    ): Promise<grpcWeb.ClientReadableStream<bchrpc.BlockNotification>> {
        return new Promise((resolve, reject) => {
            const req = new bchrpc.SubscribeBlocksRequest();
            includeTxnHashes ? req.setFullBlock(true) : req.setFullBlock(false);
            includeTxnData ? req.setFullTransactions(true) : req.setFullTransactions(false);
            includeSerializedBlock ? req.setSerializeBlock(true) : req.setSerializeBlock(false);
            try {
                resolve(this.client.subscribeBlocks(req));
            } catch (err) {
                reject(err);
            }
        });
    }

    public submitTransaction(
        { txnHex, txn }: { txnHex?: string, txn?: Uint8Array },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.SubmitTransactionResponse> {
        let tx: string | Uint8Array;
        const req = new bchrpc.SubmitTransactionRequest();
        if (txnHex) {
            tx = this.utilHexToU8(txnHex);
        } else if (txn) {
            tx = txn;
        } else {
            throw Error("Most provide either Hex string or Uint8Array");
        }
        req.setTransaction(tx);
        return new Promise((resolve, reject) => {
            this.client.submitTransaction(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public async verifyBlock({ block, hash }: { block?: bchrpc.BlockInfo, hash: string | Uint8Array }) {
        hash = (typeof hash === 'string') ? this.utilBase64toU8(hash) : hash;
        if (!block) {
            return false
        }
        const header = new Uint8Array([
            ...this.utilNumberTo4ByteLEArray(block.getVersion()),
            ...block.getPreviousBlock_asU8(),
            ...block.getMerkleRoot_asU8(),
            ...this.utilNumberTo4ByteLEArray(block.getTimestamp()),
            ...this.utilNumberTo4ByteLEArray(block.getBits()),
            ...this.utilNumberTo4ByteLEArray(block.getNonce())
        ])
        const hashComputed = await this.utilHash(header)
        return this.utilCompareUint8Array(hashComputed, hash)
    }

    public async verifyTransaction({ txnHash, txnHashHex, merkleRoot, merkleRootHex }:
        { txnHash?: string | Uint8Array, txnHashHex?: string, merkleRoot?: string | Uint8Array, merkleRootHex?: string }
    ): Promise<boolean> {
        let tx: string | Uint8Array, localMerkleRoot: string | Uint8Array
        if (txnHashHex) {
            tx = this.utilHexToU8(txnHashHex)
        } else if (txnHash) {
            tx = txnHash
        } else {
            throw Error("Most provide a transaction id for verification");
        }
        if (merkleRootHex) {
            localMerkleRoot = this.utilHexToU8(merkleRootHex)
        } else if (merkleRoot) {
            localMerkleRoot = merkleRoot
        } else {
            throw Error("Most provide a locally validated merkle root for verification");
        }
        const proof = await this.getMerkleProof({ hash: tx }, null)
        const merkleFlags = this.utilExpandMerkleFlags(await proof.getFlags_asU8());
        const merkleHashes = await proof.getHashesList();
        const merkleCheckPromise = this.utilGetMerkleRootFromProof(merkleHashes, merkleFlags, this.utilHashPair)
        return this.utilCompareUint8Array(await merkleCheckPromise, localMerkleRoot)
    }


    public utilSha256sha256 = async (ab: Uint8Array): Promise<ArrayBuffer> => {
        try {
            return await crypto.subtle.digest('SHA-256', await crypto.subtle.digest('SHA-256', ab))
        } catch (error) {
            throw error
        }
    }

    public utilHash = async (a: string | Uint8Array) => {
        a = (typeof a === 'string') ? this.utilBase64toU8(a) : a;
        return await new Uint8Array(
            await this.utilSha256sha256(
                new Uint8Array(
                    [...a]
                )
            )
        )
    }

    public utilHashPair = async (a: string | Uint8Array, b: string | Uint8Array) => {
        // If an argument is missing, assume it is a starting hash and return it
        if (!a) { return b };
        if (!b) { return a };

        // Convert base64 strings to Uint8Arrays
        a = (typeof a === 'string') ? this.utilBase64toU8(a) : a;
        b = (typeof b === 'string') ? this.utilBase64toU8(b) : b;

        return await new Uint8Array(
            await this.utilSha256sha256(
                new Uint8Array(
                    [...a, ...b]
                )
            )
        )
    }

    public utilExpandMerkleFlags = (b: Uint8Array) => {
        return Array.from(b)
            .reverse()
            .map(x => x.toString(2).padStart(8, '0'))
            .join("")
            .replace(/\b0+/g, '')
            .split("")
            .map(x => parseInt(x))
            .reverse();
    }

    public utilCompareUint8Array(a: string | Uint8Array, b: string | Uint8Array) {
        // Convert base64 strings to Uint8Arrays
        a = (typeof a === 'string') ? this.utilBase64toU8(a) : a;
        b = (typeof b === 'string') ? this.utilBase64toU8(b) : b;
        for (let i = a.length; -1 < i; i -= 1) {
            if ((a[i] !== b[i])) return false;
        }
        return true;
    }

    public utilGetMerkleRootFromProof = async (proof: (string | Uint8Array)[], flags: number[], fn: any) => {

        // proofCur tracks where in the list of proofs the next one is pulled from
        // count the number of zeros to get the index of the transaction hash in the proof array
        let proofCur = flags.filter(x => x == 0).length;

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

    private utilNumberTo4ByteLEArray = (num: number) => {
        var byteArray = [0, 0, 0, 0];

        for (var index = 0; index < byteArray.length; index++) {
            var byte = num & 0xff;
            byteArray[index] = byte;
            num = (num - byte) / 256;
        }

        return byteArray;
    };

    public utilHexToU8 = (hashHex: string) => {
        return new Uint8Array(hashHex.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16)))
    }

    public utilHexToBase64(hashHex: string) {
        return btoa(hashHex.match(/\w{2}/g)!.map(function(a) {
            return String.fromCharCode(parseInt(a, 16));
        }).join(""));
    }

    // TODO base64toHex 5 in test ?

    public utilBase64toU8 = (b64: string) => {
        return new Uint8Array(atob(b64).split("").map((c) => c.charCodeAt(0)))
    }

    // TODO u8toHex, ? in test ?
    // TODO u8toBase64, 5 in test ?

    // TODO addressBlockFilterMatch
    // P = 19
    // M = 784931

}