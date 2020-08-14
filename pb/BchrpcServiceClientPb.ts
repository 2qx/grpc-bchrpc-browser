/**
 * @fileoverview gRPC-Web generated client stub for pb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  BlockNotification,
  GetAddressTransactionsRequest,
  GetAddressTransactionsResponse,
  GetAddressUnspentOutputsRequest,
  GetAddressUnspentOutputsResponse,
  GetBlockFilterRequest,
  GetBlockFilterResponse,
  GetBlockInfoRequest,
  GetBlockInfoResponse,
  GetBlockRequest,
  GetBlockResponse,
  GetBlockchainInfoRequest,
  GetBlockchainInfoResponse,
  GetHeadersRequest,
  GetHeadersResponse,
  GetMempoolInfoRequest,
  GetMempoolInfoResponse,
  GetMempoolRequest,
  GetMempoolResponse,
  GetMerkleProofRequest,
  GetMerkleProofResponse,
  GetRawAddressTransactionsRequest,
  GetRawAddressTransactionsResponse,
  GetRawBlockRequest,
  GetRawBlockResponse,
  GetRawTransactionRequest,
  GetRawTransactionResponse,
  GetTransactionRequest,
  GetTransactionResponse,
  GetUnspentOutputRequest,
  GetUnspentOutputResponse,
  SubmitTransactionRequest,
  SubmitTransactionResponse,
  SubscribeBlocksRequest,
  SubscribeTransactionsRequest,
  TransactionNotification} from './bchrpc_pb';

export class bchrpcClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoGetMempoolInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMempoolInfoResponse,
    (request: GetMempoolInfoRequest) => {
      return request.serializeBinary();
    },
    GetMempoolInfoResponse.deserializeBinary
  );

  getMempoolInfo(
    request: GetMempoolInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMempoolInfoResponse>;

  getMempoolInfo(
    request: GetMempoolInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMempoolInfoResponse) => void): grpcWeb.ClientReadableStream<GetMempoolInfoResponse>;

  getMempoolInfo(
    request: GetMempoolInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMempoolInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetMempoolInfo', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetMempoolInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetMempoolInfo',
    request,
    metadata || {},
    this.methodInfoGetMempoolInfo);
  }

  methodInfoGetMempool = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMempoolResponse,
    (request: GetMempoolRequest) => {
      return request.serializeBinary();
    },
    GetMempoolResponse.deserializeBinary
  );

  getMempool(
    request: GetMempoolRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMempoolResponse>;

  getMempool(
    request: GetMempoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMempoolResponse) => void): grpcWeb.ClientReadableStream<GetMempoolResponse>;

  getMempool(
    request: GetMempoolRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMempoolResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetMempool', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetMempool,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetMempool',
    request,
    metadata || {},
    this.methodInfoGetMempool);
  }

  methodInfoGetBlockchainInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBlockchainInfoResponse,
    (request: GetBlockchainInfoRequest) => {
      return request.serializeBinary();
    },
    GetBlockchainInfoResponse.deserializeBinary
  );

  getBlockchainInfo(
    request: GetBlockchainInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetBlockchainInfoResponse>;

  getBlockchainInfo(
    request: GetBlockchainInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetBlockchainInfoResponse) => void): grpcWeb.ClientReadableStream<GetBlockchainInfoResponse>;

  getBlockchainInfo(
    request: GetBlockchainInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetBlockchainInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetBlockchainInfo', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetBlockchainInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetBlockchainInfo',
    request,
    metadata || {},
    this.methodInfoGetBlockchainInfo);
  }

  methodInfoGetBlockInfo = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBlockInfoResponse,
    (request: GetBlockInfoRequest) => {
      return request.serializeBinary();
    },
    GetBlockInfoResponse.deserializeBinary
  );

  getBlockInfo(
    request: GetBlockInfoRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetBlockInfoResponse>;

  getBlockInfo(
    request: GetBlockInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetBlockInfoResponse) => void): grpcWeb.ClientReadableStream<GetBlockInfoResponse>;

  getBlockInfo(
    request: GetBlockInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetBlockInfoResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetBlockInfo', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetBlockInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetBlockInfo',
    request,
    metadata || {},
    this.methodInfoGetBlockInfo);
  }

  methodInfoGetBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBlockResponse,
    (request: GetBlockRequest) => {
      return request.serializeBinary();
    },
    GetBlockResponse.deserializeBinary
  );

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetBlockResponse>;

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetBlockResponse) => void): grpcWeb.ClientReadableStream<GetBlockResponse>;

  getBlock(
    request: GetBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetBlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetBlock', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetBlock',
    request,
    metadata || {},
    this.methodInfoGetBlock);
  }

  methodInfoGetRawBlock = new grpcWeb.AbstractClientBase.MethodInfo(
    GetRawBlockResponse,
    (request: GetRawBlockRequest) => {
      return request.serializeBinary();
    },
    GetRawBlockResponse.deserializeBinary
  );

  getRawBlock(
    request: GetRawBlockRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetRawBlockResponse>;

  getRawBlock(
    request: GetRawBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetRawBlockResponse) => void): grpcWeb.ClientReadableStream<GetRawBlockResponse>;

  getRawBlock(
    request: GetRawBlockRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetRawBlockResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetRawBlock', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetRawBlock,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetRawBlock',
    request,
    metadata || {},
    this.methodInfoGetRawBlock);
  }

  methodInfoGetBlockFilter = new grpcWeb.AbstractClientBase.MethodInfo(
    GetBlockFilterResponse,
    (request: GetBlockFilterRequest) => {
      return request.serializeBinary();
    },
    GetBlockFilterResponse.deserializeBinary
  );

  getBlockFilter(
    request: GetBlockFilterRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetBlockFilterResponse>;

  getBlockFilter(
    request: GetBlockFilterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetBlockFilterResponse) => void): grpcWeb.ClientReadableStream<GetBlockFilterResponse>;

  getBlockFilter(
    request: GetBlockFilterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetBlockFilterResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetBlockFilter', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetBlockFilter,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetBlockFilter',
    request,
    metadata || {},
    this.methodInfoGetBlockFilter);
  }

  methodInfoGetHeaders = new grpcWeb.AbstractClientBase.MethodInfo(
    GetHeadersResponse,
    (request: GetHeadersRequest) => {
      return request.serializeBinary();
    },
    GetHeadersResponse.deserializeBinary
  );

  getHeaders(
    request: GetHeadersRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetHeadersResponse>;

  getHeaders(
    request: GetHeadersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetHeadersResponse) => void): grpcWeb.ClientReadableStream<GetHeadersResponse>;

  getHeaders(
    request: GetHeadersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetHeadersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetHeaders', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetHeaders,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetHeaders',
    request,
    metadata || {},
    this.methodInfoGetHeaders);
  }

  methodInfoGetTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    GetTransactionResponse,
    (request: GetTransactionRequest) => {
      return request.serializeBinary();
    },
    GetTransactionResponse.deserializeBinary
  );

  getTransaction(
    request: GetTransactionRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetTransactionResponse>;

  getTransaction(
    request: GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetTransactionResponse) => void): grpcWeb.ClientReadableStream<GetTransactionResponse>;

  getTransaction(
    request: GetTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetTransactionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetTransaction', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetTransaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetTransaction',
    request,
    metadata || {},
    this.methodInfoGetTransaction);
  }

  methodInfoGetRawTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    GetRawTransactionResponse,
    (request: GetRawTransactionRequest) => {
      return request.serializeBinary();
    },
    GetRawTransactionResponse.deserializeBinary
  );

  getRawTransaction(
    request: GetRawTransactionRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetRawTransactionResponse>;

  getRawTransaction(
    request: GetRawTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetRawTransactionResponse) => void): grpcWeb.ClientReadableStream<GetRawTransactionResponse>;

  getRawTransaction(
    request: GetRawTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetRawTransactionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetRawTransaction', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetRawTransaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetRawTransaction',
    request,
    metadata || {},
    this.methodInfoGetRawTransaction);
  }

  methodInfoGetAddressTransactions = new grpcWeb.AbstractClientBase.MethodInfo(
    GetAddressTransactionsResponse,
    (request: GetAddressTransactionsRequest) => {
      return request.serializeBinary();
    },
    GetAddressTransactionsResponse.deserializeBinary
  );

  getAddressTransactions(
    request: GetAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetAddressTransactionsResponse>;

  getAddressTransactions(
    request: GetAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetAddressTransactionsResponse) => void): grpcWeb.ClientReadableStream<GetAddressTransactionsResponse>;

  getAddressTransactions(
    request: GetAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetAddressTransactionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetAddressTransactions', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetAddressTransactions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetAddressTransactions',
    request,
    metadata || {},
    this.methodInfoGetAddressTransactions);
  }

  methodInfoGetRawAddressTransactions = new grpcWeb.AbstractClientBase.MethodInfo(
    GetRawAddressTransactionsResponse,
    (request: GetRawAddressTransactionsRequest) => {
      return request.serializeBinary();
    },
    GetRawAddressTransactionsResponse.deserializeBinary
  );

  getRawAddressTransactions(
    request: GetRawAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetRawAddressTransactionsResponse>;

  getRawAddressTransactions(
    request: GetRawAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetRawAddressTransactionsResponse) => void): grpcWeb.ClientReadableStream<GetRawAddressTransactionsResponse>;

  getRawAddressTransactions(
    request: GetRawAddressTransactionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetRawAddressTransactionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetRawAddressTransactions', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetRawAddressTransactions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetRawAddressTransactions',
    request,
    metadata || {},
    this.methodInfoGetRawAddressTransactions);
  }

  methodInfoGetAddressUnspentOutputs = new grpcWeb.AbstractClientBase.MethodInfo(
    GetAddressUnspentOutputsResponse,
    (request: GetAddressUnspentOutputsRequest) => {
      return request.serializeBinary();
    },
    GetAddressUnspentOutputsResponse.deserializeBinary
  );

  getAddressUnspentOutputs(
    request: GetAddressUnspentOutputsRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetAddressUnspentOutputsResponse>;

  getAddressUnspentOutputs(
    request: GetAddressUnspentOutputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetAddressUnspentOutputsResponse) => void): grpcWeb.ClientReadableStream<GetAddressUnspentOutputsResponse>;

  getAddressUnspentOutputs(
    request: GetAddressUnspentOutputsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetAddressUnspentOutputsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetAddressUnspentOutputs', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetAddressUnspentOutputs,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetAddressUnspentOutputs',
    request,
    metadata || {},
    this.methodInfoGetAddressUnspentOutputs);
  }

  methodInfoGetUnspentOutput = new grpcWeb.AbstractClientBase.MethodInfo(
    GetUnspentOutputResponse,
    (request: GetUnspentOutputRequest) => {
      return request.serializeBinary();
    },
    GetUnspentOutputResponse.deserializeBinary
  );

  getUnspentOutput(
    request: GetUnspentOutputRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetUnspentOutputResponse>;

  getUnspentOutput(
    request: GetUnspentOutputRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetUnspentOutputResponse) => void): grpcWeb.ClientReadableStream<GetUnspentOutputResponse>;

  getUnspentOutput(
    request: GetUnspentOutputRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetUnspentOutputResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetUnspentOutput', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetUnspentOutput,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetUnspentOutput',
    request,
    metadata || {},
    this.methodInfoGetUnspentOutput);
  }

  methodInfoGetMerkleProof = new grpcWeb.AbstractClientBase.MethodInfo(
    GetMerkleProofResponse,
    (request: GetMerkleProofRequest) => {
      return request.serializeBinary();
    },
    GetMerkleProofResponse.deserializeBinary
  );

  getMerkleProof(
    request: GetMerkleProofRequest,
    metadata: grpcWeb.Metadata | null): Promise<GetMerkleProofResponse>;

  getMerkleProof(
    request: GetMerkleProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: GetMerkleProofResponse) => void): grpcWeb.ClientReadableStream<GetMerkleProofResponse>;

  getMerkleProof(
    request: GetMerkleProofRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: GetMerkleProofResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/GetMerkleProof', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoGetMerkleProof,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/GetMerkleProof',
    request,
    metadata || {},
    this.methodInfoGetMerkleProof);
  }

  methodInfoSubmitTransaction = new grpcWeb.AbstractClientBase.MethodInfo(
    SubmitTransactionResponse,
    (request: SubmitTransactionRequest) => {
      return request.serializeBinary();
    },
    SubmitTransactionResponse.deserializeBinary
  );

  submitTransaction(
    request: SubmitTransactionRequest,
    metadata: grpcWeb.Metadata | null): Promise<SubmitTransactionResponse>;

  submitTransaction(
    request: SubmitTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: SubmitTransactionResponse) => void): grpcWeb.ClientReadableStream<SubmitTransactionResponse>;

  submitTransaction(
    request: SubmitTransactionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: SubmitTransactionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        new URL('/pb.bchrpc/SubmitTransaction', this.hostname_).toString(),
        request,
        metadata || {},
        this.methodInfoSubmitTransaction,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/pb.bchrpc/SubmitTransaction',
    request,
    metadata || {},
    this.methodInfoSubmitTransaction);
  }

  methodInfoSubscribeTransactions = new grpcWeb.AbstractClientBase.MethodInfo(
    TransactionNotification,
    (request: SubscribeTransactionsRequest) => {
      return request.serializeBinary();
    },
    TransactionNotification.deserializeBinary
  );

  subscribeTransactions(
    request: SubscribeTransactionsRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/pb.bchrpc/SubscribeTransactions', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoSubscribeTransactions);
  }

  methodInfoSubscribeBlocks = new grpcWeb.AbstractClientBase.MethodInfo(
    BlockNotification,
    (request: SubscribeBlocksRequest) => {
      return request.serializeBinary();
    },
    BlockNotification.deserializeBinary
  );

  subscribeBlocks(
    request: SubscribeBlocksRequest,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      new URL('/pb.bchrpc/SubscribeBlocks', this.hostname_).toString(),
      request,
      metadata || {},
      this.methodInfoSubscribeBlocks);
  }

}

