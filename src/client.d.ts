import * as grpcWeb from "grpc-web";
import * as bchrpc from "../pb/bchrpc_pb";
import * as bchrpc_pb_service from "../pb/BchrpcServiceClientPb";
export default class GrpcClient {
    client: bchrpc_pb_service.bchrpcClient;
    /**
     * Create a client.
     * @param url - The bchd server expressed as host:port.
     * @param testnet - Whether testnet is being used, default:false.
     * @param options - grpc client options.
     */
    constructor({ url, testnet, options }: {
        url?: string;
        testnet?: boolean;
        options: null | {
            [index: string]: string;
        };
    });
    /**
     * Get information about transactions in mempool
     */
    getMempoolInfo(): Promise<bchrpc.GetMempoolInfoResponse>;
    /**
     * Get transactions from mempool
     * @param fullTransactions - A flag to return full transaction data. Default is `false`, only transaction hashes are returned.
     */
    getMempool({ fullTransactions }: {
        fullTransactions?: boolean;
    }): Promise<bchrpc.GetMempoolResponse>;
    /**
     * Get a raw transaction
     * @param hash - the hash, in either a base64 encoded string or byte array, little-endian.
     * @param hashHex - the hash as a big-endian hexadecimal encoded string, sill be overridden by hash if provided.
     */
    getRawTransaction({ hash, hashHex }: {
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetRawTransactionResponse>;
    /**
     * Get a transaction
     * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
     * @param hashHex - the hash as a big-endian hexadecimal encoded string, will be overridden by hash, if provided.
     */
    getTransaction({ hash, hashHex }: {
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetTransactionResponse>;
    /**
     * Get block header information
     * @param blockLocatorHashes - Sparse list of hashes known to the client.
     * @param stopHash -Last block hash to return.
     */
    getHeaders({ blockLocatorHashes, stopHash }: {
        blockLocatorHashes?: (string | Uint8Array)[];
        stopHash?: string;
    }): Promise<bchrpc.GetHeadersResponse>;
    /**
     * Get transactions related to a particular address
     * @param address - Bitcoin cash address in casharr format.
     * @param nbSkip - Number of transactions to skip, in chronological order.
     * @param nbFetch - Number of transactions return.
     * @param height - Filter to only return transactions after this block number.
     * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
     * @param hashHex - the hash as a big-endian hexadecimal encoded string, will be overridden by `hash`, if provided.
     */
    getAddressTransactions({ address, nbSkip, nbFetch, height, hashHex }: {
        address: string;
        nbSkip?: number;
        nbFetch?: number;
        height?: number;
        hashHex?: string;
    }): Promise<bchrpc.GetAddressTransactionsResponse>;
    getUnspentOutput({ hash, hashHex, vout, includeMempool }: {
        hash?: string | Uint8Array;
        hashHex?: string;
        vout: number;
        includeMempool?: boolean;
    }): Promise<bchrpc.GetUnspentOutputResponse>;
    /**
     * Retrieve merkle (SPV) proof that the given transaction is in the provided block.
     * @param hash - the tx hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the tx hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     */
    getMerkleProof({ hash, hashHex }: {
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetMerkleProofResponse>;
    getAddressUtxos({ address, includeMempool }: {
        address: string;
        includeMempool: boolean;
    }): Promise<bchrpc.GetAddressUnspentOutputsResponse>;
    /**
     * Retrieve raw block from a hash
     * @param hash - the hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     */
    getRawBlock({ hash, hashHex }: {
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetRawBlockResponse>;
    /**
     * Retrieve block info given a block number or hash
     * @param index - the block number to be retrieved.
     * @param hash - the hash, in either a 'base64' encoded string or byte array, little-endian.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.
     * @param fullTransactions - a flag to return full transaction data, by defult `false` only transaction hashes are returned.
     */
    getBlock({ index, hash, hashHex, fullTransactions }: {
        index?: number;
        hash?: string | Uint8Array;
        hashHex?: string;
        fullTransactions?: boolean;
    }): Promise<bchrpc.GetBlockResponse>;
    /**
     * Retrieve block filter given a block number or hash
     * @param height - the block number index to be retrieved.
     * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.
     */
    getBlockFilter({ height, hash, hashHex }: {
        height?: number;
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetBlockFilterResponse>;
    /**
     * Retrieve block info given a block number or hash
     * @param height - the block number index to be retrieved.
     * @param hash - the hash, expressed in little-endian in either a base64 encoded string or byte array.
     * @param hashHex - the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.
     */
    getBlockInfo({ height, hash, hashHex }: {
        height?: number;
        hash?: string | Uint8Array;
        hashHex?: string;
    }): Promise<bchrpc.GetBlockInfoResponse>;
    /**
     * Retrieve block info for the network, network state and host node.
     */
    getBlockchainInfo(): Promise<bchrpc.GetBlockchainInfoResponse>;
    /**
     * @param includeMempoolAcceptance - If true, new unconfirmed transactions from mempool are included apart from the ones confirmed in a block.
     * @param includeBlockAcceptance - If true, transactions are included when they are confirmed. This notification is sent in addition to any requested mempool notifications.
     * @param includeSerializedTxn - If true, transactions are serialized using bitcoin protocol encoding. Default is false, transaction will be Marshaled.
     * @param filter - Transaction filter
     * @param subscribeAllTransactions - If true, a filter will be constructed that captures all transactions
     * @param unsubscribe - NOT IMPLEMENTED, see ClientReadableStream.cancel()
     */
    subscribeTransactions({ includeMempoolAcceptance, includeBlockAcceptance, includeSerializedTxn, transactionFilter, unsubscribe }: {
        includeMempoolAcceptance?: boolean;
        includeBlockAcceptance?: boolean;
        includeSerializedTxn?: boolean;
        transactionFilter?: bchrpc.TransactionFilter;
        unsubscribe?: boolean;
    }): Promise<grpcWeb.ClientReadableStream<bchrpc.TransactionNotification>>;
    subscribeBlocks({ includeSerializedBlock, includeTxnHashes, includeTxnData }: {
        includeSerializedBlock?: boolean;
        includeTxnHashes?: boolean;
        includeTxnData?: boolean;
    }): Promise<grpcWeb.ClientReadableStream<bchrpc.BlockNotification>>;
    submitTransaction({ txnHex, txn }: {
        txnHex?: string;
        txn?: Uint8Array;
    }): Promise<bchrpc.SubmitTransactionResponse>;
}
