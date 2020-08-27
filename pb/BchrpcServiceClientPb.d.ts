/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */
import * as grpcWeb from 'grpc-web';
import { BlockNotification, GetAddressTransactionsRequest, GetAddressTransactionsResponse, GetAddressUnspentOutputsRequest, GetAddressUnspentOutputsResponse, GetBlockFilterRequest, GetBlockFilterResponse, GetBlockInfoRequest, GetBlockInfoResponse, GetBlockRequest, GetBlockResponse, GetBlockchainInfoRequest, GetBlockchainInfoResponse, GetHeadersRequest, GetHeadersResponse, GetMempoolInfoRequest, GetMempoolInfoResponse, GetMempoolRequest, GetMempoolResponse, GetMerkleProofRequest, GetMerkleProofResponse, GetRawAddressTransactionsRequest, GetRawAddressTransactionsResponse, GetRawBlockRequest, GetRawBlockResponse, GetRawTransactionRequest, GetRawTransactionResponse, GetTransactionRequest, GetTransactionResponse, GetUnspentOutputRequest, GetUnspentOutputResponse, SubmitTransactionRequest, SubmitTransactionResponse, SubscribeBlocksRequest, SubscribeTransactionsRequest, TransactionNotification } from './bchrpc_pb';
export declare class bchrpcClient {
    client_: grpcWeb.AbstractClientBase;
    hostname_: string;
    credentials_: null | {
        [index: string]: string;
    };
    options_: null | {
        [index: string]: string;
    };
    constructor(hostname: string, credentials?: null | {
        [index: string]: string;
    }, options?: null | {
        [index: string]: string;
    });
    methodInfoGetMempoolInfo: grpcWeb.AbstractClientBase.MethodInfo<GetMempoolInfoRequest, GetMempoolInfoResponse>;
    getMempoolInfo(request: GetMempoolInfoRequest, metadata: grpcWeb.Metadata | null): Promise<GetMempoolInfoResponse>;
    getMempoolInfo(request: GetMempoolInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetMempoolInfoResponse) => void): grpcWeb.ClientReadableStream<GetMempoolInfoResponse>;
    methodInfoGetMempool: grpcWeb.AbstractClientBase.MethodInfo<GetMempoolRequest, GetMempoolResponse>;
    getMempool(request: GetMempoolRequest, metadata: grpcWeb.Metadata | null): Promise<GetMempoolResponse>;
    getMempool(request: GetMempoolRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetMempoolResponse) => void): grpcWeb.ClientReadableStream<GetMempoolResponse>;
    methodInfoGetBlockchainInfo: grpcWeb.AbstractClientBase.MethodInfo<GetBlockchainInfoRequest, GetBlockchainInfoResponse>;
    getBlockchainInfo(request: GetBlockchainInfoRequest, metadata: grpcWeb.Metadata | null): Promise<GetBlockchainInfoResponse>;
    getBlockchainInfo(request: GetBlockchainInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetBlockchainInfoResponse) => void): grpcWeb.ClientReadableStream<GetBlockchainInfoResponse>;
    methodInfoGetBlockInfo: grpcWeb.AbstractClientBase.MethodInfo<GetBlockInfoRequest, GetBlockInfoResponse>;
    getBlockInfo(request: GetBlockInfoRequest, metadata: grpcWeb.Metadata | null): Promise<GetBlockInfoResponse>;
    getBlockInfo(request: GetBlockInfoRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetBlockInfoResponse) => void): grpcWeb.ClientReadableStream<GetBlockInfoResponse>;
    methodInfoGetBlock: grpcWeb.AbstractClientBase.MethodInfo<GetBlockRequest, GetBlockResponse>;
    getBlock(request: GetBlockRequest, metadata: grpcWeb.Metadata | null): Promise<GetBlockResponse>;
    getBlock(request: GetBlockRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetBlockResponse) => void): grpcWeb.ClientReadableStream<GetBlockResponse>;
    methodInfoGetRawBlock: grpcWeb.AbstractClientBase.MethodInfo<GetRawBlockRequest, GetRawBlockResponse>;
    getRawBlock(request: GetRawBlockRequest, metadata: grpcWeb.Metadata | null): Promise<GetRawBlockResponse>;
    getRawBlock(request: GetRawBlockRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetRawBlockResponse) => void): grpcWeb.ClientReadableStream<GetRawBlockResponse>;
    methodInfoGetBlockFilter: grpcWeb.AbstractClientBase.MethodInfo<GetBlockFilterRequest, GetBlockFilterResponse>;
    getBlockFilter(request: GetBlockFilterRequest, metadata: grpcWeb.Metadata | null): Promise<GetBlockFilterResponse>;
    getBlockFilter(request: GetBlockFilterRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetBlockFilterResponse) => void): grpcWeb.ClientReadableStream<GetBlockFilterResponse>;
    methodInfoGetHeaders: grpcWeb.AbstractClientBase.MethodInfo<GetHeadersRequest, GetHeadersResponse>;
    getHeaders(request: GetHeadersRequest, metadata: grpcWeb.Metadata | null): Promise<GetHeadersResponse>;
    getHeaders(request: GetHeadersRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetHeadersResponse) => void): grpcWeb.ClientReadableStream<GetHeadersResponse>;
    methodInfoGetTransaction: grpcWeb.AbstractClientBase.MethodInfo<GetTransactionRequest, GetTransactionResponse>;
    getTransaction(request: GetTransactionRequest, metadata: grpcWeb.Metadata | null): Promise<GetTransactionResponse>;
    getTransaction(request: GetTransactionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetTransactionResponse) => void): grpcWeb.ClientReadableStream<GetTransactionResponse>;
    methodInfoGetRawTransaction: grpcWeb.AbstractClientBase.MethodInfo<GetRawTransactionRequest, GetRawTransactionResponse>;
    getRawTransaction(request: GetRawTransactionRequest, metadata: grpcWeb.Metadata | null): Promise<GetRawTransactionResponse>;
    getRawTransaction(request: GetRawTransactionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetRawTransactionResponse) => void): grpcWeb.ClientReadableStream<GetRawTransactionResponse>;
    methodInfoGetAddressTransactions: grpcWeb.AbstractClientBase.MethodInfo<GetAddressTransactionsRequest, GetAddressTransactionsResponse>;
    getAddressTransactions(request: GetAddressTransactionsRequest, metadata: grpcWeb.Metadata | null): Promise<GetAddressTransactionsResponse>;
    getAddressTransactions(request: GetAddressTransactionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetAddressTransactionsResponse) => void): grpcWeb.ClientReadableStream<GetAddressTransactionsResponse>;
    methodInfoGetRawAddressTransactions: grpcWeb.AbstractClientBase.MethodInfo<GetRawAddressTransactionsRequest, GetRawAddressTransactionsResponse>;
    getRawAddressTransactions(request: GetRawAddressTransactionsRequest, metadata: grpcWeb.Metadata | null): Promise<GetRawAddressTransactionsResponse>;
    getRawAddressTransactions(request: GetRawAddressTransactionsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetRawAddressTransactionsResponse) => void): grpcWeb.ClientReadableStream<GetRawAddressTransactionsResponse>;
    methodInfoGetAddressUnspentOutputs: grpcWeb.AbstractClientBase.MethodInfo<GetAddressUnspentOutputsRequest, GetAddressUnspentOutputsResponse>;
    getAddressUnspentOutputs(request: GetAddressUnspentOutputsRequest, metadata: grpcWeb.Metadata | null): Promise<GetAddressUnspentOutputsResponse>;
    getAddressUnspentOutputs(request: GetAddressUnspentOutputsRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetAddressUnspentOutputsResponse) => void): grpcWeb.ClientReadableStream<GetAddressUnspentOutputsResponse>;
    methodInfoGetUnspentOutput: grpcWeb.AbstractClientBase.MethodInfo<GetUnspentOutputRequest, GetUnspentOutputResponse>;
    getUnspentOutput(request: GetUnspentOutputRequest, metadata: grpcWeb.Metadata | null): Promise<GetUnspentOutputResponse>;
    getUnspentOutput(request: GetUnspentOutputRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetUnspentOutputResponse) => void): grpcWeb.ClientReadableStream<GetUnspentOutputResponse>;
    methodInfoGetMerkleProof: grpcWeb.AbstractClientBase.MethodInfo<GetMerkleProofRequest, GetMerkleProofResponse>;
    getMerkleProof(request: GetMerkleProofRequest, metadata: grpcWeb.Metadata | null): Promise<GetMerkleProofResponse>;
    getMerkleProof(request: GetMerkleProofRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: GetMerkleProofResponse) => void): grpcWeb.ClientReadableStream<GetMerkleProofResponse>;
    methodInfoSubmitTransaction: grpcWeb.AbstractClientBase.MethodInfo<SubmitTransactionRequest, SubmitTransactionResponse>;
    submitTransaction(request: SubmitTransactionRequest, metadata: grpcWeb.Metadata | null): Promise<SubmitTransactionResponse>;
    submitTransaction(request: SubmitTransactionRequest, metadata: grpcWeb.Metadata | null, callback: (err: grpcWeb.Error, response: SubmitTransactionResponse) => void): grpcWeb.ClientReadableStream<SubmitTransactionResponse>;
    methodInfoSubscribeTransactions: grpcWeb.AbstractClientBase.MethodInfo<SubscribeTransactionsRequest, TransactionNotification>;
    subscribeTransactions(request: SubscribeTransactionsRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<TransactionNotification>;
    methodInfoSubscribeBlocks: grpcWeb.AbstractClientBase.MethodInfo<SubscribeBlocksRequest, BlockNotification>;
    subscribeBlocks(request: SubscribeBlocksRequest, metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<BlockNotification>;
}
