import * as jspb from "google-protobuf"

export class GetMempoolInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolInfoRequest): GetMempoolInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetMempoolInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolInfoRequest;
  static deserializeBinaryFromReader(message: GetMempoolInfoRequest, reader: jspb.BinaryReader): GetMempoolInfoRequest;
}

export namespace GetMempoolInfoRequest {
  export type AsObject = {
  }
}

export class GetMempoolInfoResponse extends jspb.Message {
  getSize(): number;
  setSize(value: number): GetMempoolInfoResponse;

  getBytes(): number;
  setBytes(value: number): GetMempoolInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolInfoResponse): GetMempoolInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetMempoolInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolInfoResponse;
  static deserializeBinaryFromReader(message: GetMempoolInfoResponse, reader: jspb.BinaryReader): GetMempoolInfoResponse;
}

export namespace GetMempoolInfoResponse {
  export type AsObject = {
    size: number,
    bytes: number,
  }
}

export class GetMempoolRequest extends jspb.Message {
  getFullTransactions(): boolean;
  setFullTransactions(value: boolean): GetMempoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolRequest): GetMempoolRequest.AsObject;
  static serializeBinaryToWriter(message: GetMempoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolRequest;
  static deserializeBinaryFromReader(message: GetMempoolRequest, reader: jspb.BinaryReader): GetMempoolRequest;
}

export namespace GetMempoolRequest {
  export type AsObject = {
    fullTransactions: boolean,
  }
}

export class GetMempoolResponse extends jspb.Message {
  getTransactionDataList(): Array<GetMempoolResponse.TransactionData>;
  setTransactionDataList(value: Array<GetMempoolResponse.TransactionData>): GetMempoolResponse;
  clearTransactionDataList(): GetMempoolResponse;
  addTransactionData(value?: GetMempoolResponse.TransactionData, index?: number): GetMempoolResponse.TransactionData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMempoolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMempoolResponse): GetMempoolResponse.AsObject;
  static serializeBinaryToWriter(message: GetMempoolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMempoolResponse;
  static deserializeBinaryFromReader(message: GetMempoolResponse, reader: jspb.BinaryReader): GetMempoolResponse;
}

export namespace GetMempoolResponse {
  export type AsObject = {
    transactionDataList: Array<GetMempoolResponse.TransactionData.AsObject>,
  }

  export class TransactionData extends jspb.Message {
    getTransactionHash(): Uint8Array | string;
    getTransactionHash_asU8(): Uint8Array;
    getTransactionHash_asB64(): string;
    setTransactionHash(value: Uint8Array | string): TransactionData;

    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): TransactionData;
    hasTransaction(): boolean;
    clearTransaction(): TransactionData;

    getTxidsOrTxsCase(): TransactionData.TxidsOrTxsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionData.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionData): TransactionData.AsObject;
    static serializeBinaryToWriter(message: TransactionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionData;
    static deserializeBinaryFromReader(message: TransactionData, reader: jspb.BinaryReader): TransactionData;
  }

  export namespace TransactionData {
    export type AsObject = {
      transactionHash: Uint8Array | string,
      transaction?: Transaction.AsObject,
    }

    export enum TxidsOrTxsCase { 
      TXIDS_OR_TXS_NOT_SET = 0,
      TRANSACTION_HASH = 1,
      TRANSACTION = 2,
    }
  }

}

export class GetBlockchainInfoRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockchainInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockchainInfoRequest): GetBlockchainInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockchainInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockchainInfoRequest;
  static deserializeBinaryFromReader(message: GetBlockchainInfoRequest, reader: jspb.BinaryReader): GetBlockchainInfoRequest;
}

export namespace GetBlockchainInfoRequest {
  export type AsObject = {
  }
}

export class GetBlockchainInfoResponse extends jspb.Message {
  getBitcoinNet(): GetBlockchainInfoResponse.BitcoinNet;
  setBitcoinNet(value: GetBlockchainInfoResponse.BitcoinNet): GetBlockchainInfoResponse;

  getBestHeight(): number;
  setBestHeight(value: number): GetBlockchainInfoResponse;

  getBestBlockHash(): Uint8Array | string;
  getBestBlockHash_asU8(): Uint8Array;
  getBestBlockHash_asB64(): string;
  setBestBlockHash(value: Uint8Array | string): GetBlockchainInfoResponse;

  getDifficulty(): number;
  setDifficulty(value: number): GetBlockchainInfoResponse;

  getMedianTime(): number;
  setMedianTime(value: number): GetBlockchainInfoResponse;

  getTxIndex(): boolean;
  setTxIndex(value: boolean): GetBlockchainInfoResponse;

  getAddrIndex(): boolean;
  setAddrIndex(value: boolean): GetBlockchainInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockchainInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockchainInfoResponse): GetBlockchainInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockchainInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockchainInfoResponse;
  static deserializeBinaryFromReader(message: GetBlockchainInfoResponse, reader: jspb.BinaryReader): GetBlockchainInfoResponse;
}

export namespace GetBlockchainInfoResponse {
  export type AsObject = {
    bitcoinNet: GetBlockchainInfoResponse.BitcoinNet,
    bestHeight: number,
    bestBlockHash: Uint8Array | string,
    difficulty: number,
    medianTime: number,
    txIndex: boolean,
    addrIndex: boolean,
  }

  export enum BitcoinNet { 
    MAINNET = 0,
    REGTEST = 1,
    TESTNET3 = 2,
    SIMNET = 3,
  }
}

export class GetBlockInfoRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetBlockInfoRequest;

  getHeight(): number;
  setHeight(value: number): GetBlockInfoRequest;

  getHashOrHeightCase(): GetBlockInfoRequest.HashOrHeightCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockInfoRequest): GetBlockInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockInfoRequest;
  static deserializeBinaryFromReader(message: GetBlockInfoRequest, reader: jspb.BinaryReader): GetBlockInfoRequest;
}

export namespace GetBlockInfoRequest {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
  }

  export enum HashOrHeightCase { 
    HASH_OR_HEIGHT_NOT_SET = 0,
    HASH = 1,
    HEIGHT = 2,
  }
}

export class GetBlockInfoResponse extends jspb.Message {
  getInfo(): BlockInfo | undefined;
  setInfo(value?: BlockInfo): GetBlockInfoResponse;
  hasInfo(): boolean;
  clearInfo(): GetBlockInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockInfoResponse): GetBlockInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockInfoResponse;
  static deserializeBinaryFromReader(message: GetBlockInfoResponse, reader: jspb.BinaryReader): GetBlockInfoResponse;
}

export namespace GetBlockInfoResponse {
  export type AsObject = {
    info?: BlockInfo.AsObject,
  }
}

export class GetBlockRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetBlockRequest;

  getHeight(): number;
  setHeight(value: number): GetBlockRequest;

  getFullTransactions(): boolean;
  setFullTransactions(value: boolean): GetBlockRequest;

  getHashOrHeightCase(): GetBlockRequest.HashOrHeightCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockRequest): GetBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockRequest;
  static deserializeBinaryFromReader(message: GetBlockRequest, reader: jspb.BinaryReader): GetBlockRequest;
}

export namespace GetBlockRequest {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
    fullTransactions: boolean,
  }

  export enum HashOrHeightCase { 
    HASH_OR_HEIGHT_NOT_SET = 0,
    HASH = 1,
    HEIGHT = 2,
  }
}

export class GetBlockResponse extends jspb.Message {
  getBlock(): Block | undefined;
  setBlock(value?: Block): GetBlockResponse;
  hasBlock(): boolean;
  clearBlock(): GetBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockResponse): GetBlockResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockResponse;
  static deserializeBinaryFromReader(message: GetBlockResponse, reader: jspb.BinaryReader): GetBlockResponse;
}

export namespace GetBlockResponse {
  export type AsObject = {
    block?: Block.AsObject,
  }
}

export class GetRawBlockRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetRawBlockRequest;

  getHeight(): number;
  setHeight(value: number): GetRawBlockRequest;

  getHashOrHeightCase(): GetRawBlockRequest.HashOrHeightCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawBlockRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawBlockRequest): GetRawBlockRequest.AsObject;
  static serializeBinaryToWriter(message: GetRawBlockRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawBlockRequest;
  static deserializeBinaryFromReader(message: GetRawBlockRequest, reader: jspb.BinaryReader): GetRawBlockRequest;
}

export namespace GetRawBlockRequest {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
  }

  export enum HashOrHeightCase { 
    HASH_OR_HEIGHT_NOT_SET = 0,
    HASH = 1,
    HEIGHT = 2,
  }
}

export class GetRawBlockResponse extends jspb.Message {
  getBlock(): Uint8Array | string;
  getBlock_asU8(): Uint8Array;
  getBlock_asB64(): string;
  setBlock(value: Uint8Array | string): GetRawBlockResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawBlockResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawBlockResponse): GetRawBlockResponse.AsObject;
  static serializeBinaryToWriter(message: GetRawBlockResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawBlockResponse;
  static deserializeBinaryFromReader(message: GetRawBlockResponse, reader: jspb.BinaryReader): GetRawBlockResponse;
}

export namespace GetRawBlockResponse {
  export type AsObject = {
    block: Uint8Array | string,
  }
}

export class GetBlockFilterRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetBlockFilterRequest;

  getHeight(): number;
  setHeight(value: number): GetBlockFilterRequest;

  getHashOrHeightCase(): GetBlockFilterRequest.HashOrHeightCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockFilterRequest): GetBlockFilterRequest.AsObject;
  static serializeBinaryToWriter(message: GetBlockFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockFilterRequest;
  static deserializeBinaryFromReader(message: GetBlockFilterRequest, reader: jspb.BinaryReader): GetBlockFilterRequest;
}

export namespace GetBlockFilterRequest {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
  }

  export enum HashOrHeightCase { 
    HASH_OR_HEIGHT_NOT_SET = 0,
    HASH = 1,
    HEIGHT = 2,
  }
}

export class GetBlockFilterResponse extends jspb.Message {
  getFilter(): Uint8Array | string;
  getFilter_asU8(): Uint8Array;
  getFilter_asB64(): string;
  setFilter(value: Uint8Array | string): GetBlockFilterResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBlockFilterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBlockFilterResponse): GetBlockFilterResponse.AsObject;
  static serializeBinaryToWriter(message: GetBlockFilterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBlockFilterResponse;
  static deserializeBinaryFromReader(message: GetBlockFilterResponse, reader: jspb.BinaryReader): GetBlockFilterResponse;
}

export namespace GetBlockFilterResponse {
  export type AsObject = {
    filter: Uint8Array | string,
  }
}

export class GetHeadersRequest extends jspb.Message {
  getBlockLocatorHashesList(): Array<Uint8Array | string>;
  setBlockLocatorHashesList(value: Array<Uint8Array | string>): GetHeadersRequest;
  clearBlockLocatorHashesList(): GetHeadersRequest;
  addBlockLocatorHashes(value: Uint8Array | string, index?: number): GetHeadersRequest;

  getStopHash(): Uint8Array | string;
  getStopHash_asU8(): Uint8Array;
  getStopHash_asB64(): string;
  setStopHash(value: Uint8Array | string): GetHeadersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeadersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeadersRequest): GetHeadersRequest.AsObject;
  static serializeBinaryToWriter(message: GetHeadersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeadersRequest;
  static deserializeBinaryFromReader(message: GetHeadersRequest, reader: jspb.BinaryReader): GetHeadersRequest;
}

export namespace GetHeadersRequest {
  export type AsObject = {
    blockLocatorHashesList: Array<Uint8Array | string>,
    stopHash: Uint8Array | string,
  }
}

export class GetHeadersResponse extends jspb.Message {
  getHeadersList(): Array<BlockInfo>;
  setHeadersList(value: Array<BlockInfo>): GetHeadersResponse;
  clearHeadersList(): GetHeadersResponse;
  addHeaders(value?: BlockInfo, index?: number): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHeadersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHeadersResponse): GetHeadersResponse.AsObject;
  static serializeBinaryToWriter(message: GetHeadersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHeadersResponse;
  static deserializeBinaryFromReader(message: GetHeadersResponse, reader: jspb.BinaryReader): GetHeadersResponse;
}

export namespace GetHeadersResponse {
  export type AsObject = {
    headersList: Array<BlockInfo.AsObject>,
  }
}

export class GetTransactionRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class GetTransactionResponse extends jspb.Message {
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): GetTransactionResponse;
  hasTransaction(): boolean;
  clearTransaction(): GetTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
  static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
  export type AsObject = {
    transaction?: Transaction.AsObject,
  }
}

export class GetRawTransactionRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetRawTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawTransactionRequest): GetRawTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetRawTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawTransactionRequest;
  static deserializeBinaryFromReader(message: GetRawTransactionRequest, reader: jspb.BinaryReader): GetRawTransactionRequest;
}

export namespace GetRawTransactionRequest {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class GetRawTransactionResponse extends jspb.Message {
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): GetRawTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawTransactionResponse): GetRawTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: GetRawTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawTransactionResponse;
  static deserializeBinaryFromReader(message: GetRawTransactionResponse, reader: jspb.BinaryReader): GetRawTransactionResponse;
}

export namespace GetRawTransactionResponse {
  export type AsObject = {
    transaction: Uint8Array | string,
  }
}

export class GetAddressTransactionsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GetAddressTransactionsRequest;

  getNbSkip(): number;
  setNbSkip(value: number): GetAddressTransactionsRequest;

  getNbFetch(): number;
  setNbFetch(value: number): GetAddressTransactionsRequest;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetAddressTransactionsRequest;

  getHeight(): number;
  setHeight(value: number): GetAddressTransactionsRequest;

  getStartBlockCase(): GetAddressTransactionsRequest.StartBlockCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressTransactionsRequest): GetAddressTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAddressTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressTransactionsRequest;
  static deserializeBinaryFromReader(message: GetAddressTransactionsRequest, reader: jspb.BinaryReader): GetAddressTransactionsRequest;
}

export namespace GetAddressTransactionsRequest {
  export type AsObject = {
    address: string,
    nbSkip: number,
    nbFetch: number,
    hash: Uint8Array | string,
    height: number,
  }

  export enum StartBlockCase { 
    START_BLOCK_NOT_SET = 0,
    HASH = 4,
    HEIGHT = 5,
  }
}

export class GetAddressTransactionsResponse extends jspb.Message {
  getConfirmedTransactionsList(): Array<Transaction>;
  setConfirmedTransactionsList(value: Array<Transaction>): GetAddressTransactionsResponse;
  clearConfirmedTransactionsList(): GetAddressTransactionsResponse;
  addConfirmedTransactions(value?: Transaction, index?: number): Transaction;

  getUnconfirmedTransactionsList(): Array<MempoolTransaction>;
  setUnconfirmedTransactionsList(value: Array<MempoolTransaction>): GetAddressTransactionsResponse;
  clearUnconfirmedTransactionsList(): GetAddressTransactionsResponse;
  addUnconfirmedTransactions(value?: MempoolTransaction, index?: number): MempoolTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressTransactionsResponse): GetAddressTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAddressTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressTransactionsResponse;
  static deserializeBinaryFromReader(message: GetAddressTransactionsResponse, reader: jspb.BinaryReader): GetAddressTransactionsResponse;
}

export namespace GetAddressTransactionsResponse {
  export type AsObject = {
    confirmedTransactionsList: Array<Transaction.AsObject>,
    unconfirmedTransactionsList: Array<MempoolTransaction.AsObject>,
  }
}

export class GetRawAddressTransactionsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GetRawAddressTransactionsRequest;

  getNbSkip(): number;
  setNbSkip(value: number): GetRawAddressTransactionsRequest;

  getNbFetch(): number;
  setNbFetch(value: number): GetRawAddressTransactionsRequest;

  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetRawAddressTransactionsRequest;

  getHeight(): number;
  setHeight(value: number): GetRawAddressTransactionsRequest;

  getStartBlockCase(): GetRawAddressTransactionsRequest.StartBlockCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawAddressTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawAddressTransactionsRequest): GetRawAddressTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetRawAddressTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawAddressTransactionsRequest;
  static deserializeBinaryFromReader(message: GetRawAddressTransactionsRequest, reader: jspb.BinaryReader): GetRawAddressTransactionsRequest;
}

export namespace GetRawAddressTransactionsRequest {
  export type AsObject = {
    address: string,
    nbSkip: number,
    nbFetch: number,
    hash: Uint8Array | string,
    height: number,
  }

  export enum StartBlockCase { 
    START_BLOCK_NOT_SET = 0,
    HASH = 4,
    HEIGHT = 5,
  }
}

export class GetRawAddressTransactionsResponse extends jspb.Message {
  getConfirmedTransactionsList(): Array<Uint8Array | string>;
  setConfirmedTransactionsList(value: Array<Uint8Array | string>): GetRawAddressTransactionsResponse;
  clearConfirmedTransactionsList(): GetRawAddressTransactionsResponse;
  addConfirmedTransactions(value: Uint8Array | string, index?: number): GetRawAddressTransactionsResponse;

  getUnconfirmedTransactionsList(): Array<Uint8Array | string>;
  setUnconfirmedTransactionsList(value: Array<Uint8Array | string>): GetRawAddressTransactionsResponse;
  clearUnconfirmedTransactionsList(): GetRawAddressTransactionsResponse;
  addUnconfirmedTransactions(value: Uint8Array | string, index?: number): GetRawAddressTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRawAddressTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRawAddressTransactionsResponse): GetRawAddressTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRawAddressTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRawAddressTransactionsResponse;
  static deserializeBinaryFromReader(message: GetRawAddressTransactionsResponse, reader: jspb.BinaryReader): GetRawAddressTransactionsResponse;
}

export namespace GetRawAddressTransactionsResponse {
  export type AsObject = {
    confirmedTransactionsList: Array<Uint8Array | string>,
    unconfirmedTransactionsList: Array<Uint8Array | string>,
  }
}

export class GetAddressUnspentOutputsRequest extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): GetAddressUnspentOutputsRequest;

  getIncludeMempool(): boolean;
  setIncludeMempool(value: boolean): GetAddressUnspentOutputsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressUnspentOutputsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressUnspentOutputsRequest): GetAddressUnspentOutputsRequest.AsObject;
  static serializeBinaryToWriter(message: GetAddressUnspentOutputsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressUnspentOutputsRequest;
  static deserializeBinaryFromReader(message: GetAddressUnspentOutputsRequest, reader: jspb.BinaryReader): GetAddressUnspentOutputsRequest;
}

export namespace GetAddressUnspentOutputsRequest {
  export type AsObject = {
    address: string,
    includeMempool: boolean,
  }
}

export class GetAddressUnspentOutputsResponse extends jspb.Message {
  getOutputsList(): Array<UnspentOutput>;
  setOutputsList(value: Array<UnspentOutput>): GetAddressUnspentOutputsResponse;
  clearOutputsList(): GetAddressUnspentOutputsResponse;
  addOutputs(value?: UnspentOutput, index?: number): UnspentOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAddressUnspentOutputsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAddressUnspentOutputsResponse): GetAddressUnspentOutputsResponse.AsObject;
  static serializeBinaryToWriter(message: GetAddressUnspentOutputsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAddressUnspentOutputsResponse;
  static deserializeBinaryFromReader(message: GetAddressUnspentOutputsResponse, reader: jspb.BinaryReader): GetAddressUnspentOutputsResponse;
}

export namespace GetAddressUnspentOutputsResponse {
  export type AsObject = {
    outputsList: Array<UnspentOutput.AsObject>,
  }
}

export class GetUnspentOutputRequest extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): GetUnspentOutputRequest;

  getIndex(): number;
  setIndex(value: number): GetUnspentOutputRequest;

  getIncludeMempool(): boolean;
  setIncludeMempool(value: boolean): GetUnspentOutputRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnspentOutputRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnspentOutputRequest): GetUnspentOutputRequest.AsObject;
  static serializeBinaryToWriter(message: GetUnspentOutputRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnspentOutputRequest;
  static deserializeBinaryFromReader(message: GetUnspentOutputRequest, reader: jspb.BinaryReader): GetUnspentOutputRequest;
}

export namespace GetUnspentOutputRequest {
  export type AsObject = {
    hash: Uint8Array | string,
    index: number,
    includeMempool: boolean,
  }
}

export class GetUnspentOutputResponse extends jspb.Message {
  getOutpoint(): Transaction.Input.Outpoint | undefined;
  setOutpoint(value?: Transaction.Input.Outpoint): GetUnspentOutputResponse;
  hasOutpoint(): boolean;
  clearOutpoint(): GetUnspentOutputResponse;

  getPubkeyScript(): Uint8Array | string;
  getPubkeyScript_asU8(): Uint8Array;
  getPubkeyScript_asB64(): string;
  setPubkeyScript(value: Uint8Array | string): GetUnspentOutputResponse;

  getValue(): number;
  setValue(value: number): GetUnspentOutputResponse;

  getIsCoinbase(): boolean;
  setIsCoinbase(value: boolean): GetUnspentOutputResponse;

  getBlockHeight(): number;
  setBlockHeight(value: number): GetUnspentOutputResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnspentOutputResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnspentOutputResponse): GetUnspentOutputResponse.AsObject;
  static serializeBinaryToWriter(message: GetUnspentOutputResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnspentOutputResponse;
  static deserializeBinaryFromReader(message: GetUnspentOutputResponse, reader: jspb.BinaryReader): GetUnspentOutputResponse;
}

export namespace GetUnspentOutputResponse {
  export type AsObject = {
    outpoint?: Transaction.Input.Outpoint.AsObject,
    pubkeyScript: Uint8Array | string,
    value: number,
    isCoinbase: boolean,
    blockHeight: number,
  }
}

export class GetMerkleProofRequest extends jspb.Message {
  getTransactionHash(): Uint8Array | string;
  getTransactionHash_asU8(): Uint8Array;
  getTransactionHash_asB64(): string;
  setTransactionHash(value: Uint8Array | string): GetMerkleProofRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMerkleProofRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMerkleProofRequest): GetMerkleProofRequest.AsObject;
  static serializeBinaryToWriter(message: GetMerkleProofRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMerkleProofRequest;
  static deserializeBinaryFromReader(message: GetMerkleProofRequest, reader: jspb.BinaryReader): GetMerkleProofRequest;
}

export namespace GetMerkleProofRequest {
  export type AsObject = {
    transactionHash: Uint8Array | string,
  }
}

export class GetMerkleProofResponse extends jspb.Message {
  getBlock(): BlockInfo | undefined;
  setBlock(value?: BlockInfo): GetMerkleProofResponse;
  hasBlock(): boolean;
  clearBlock(): GetMerkleProofResponse;

  getHashesList(): Array<Uint8Array | string>;
  setHashesList(value: Array<Uint8Array | string>): GetMerkleProofResponse;
  clearHashesList(): GetMerkleProofResponse;
  addHashes(value: Uint8Array | string, index?: number): GetMerkleProofResponse;

  getFlags(): Uint8Array | string;
  getFlags_asU8(): Uint8Array;
  getFlags_asB64(): string;
  setFlags(value: Uint8Array | string): GetMerkleProofResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMerkleProofResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMerkleProofResponse): GetMerkleProofResponse.AsObject;
  static serializeBinaryToWriter(message: GetMerkleProofResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMerkleProofResponse;
  static deserializeBinaryFromReader(message: GetMerkleProofResponse, reader: jspb.BinaryReader): GetMerkleProofResponse;
}

export namespace GetMerkleProofResponse {
  export type AsObject = {
    block?: BlockInfo.AsObject,
    hashesList: Array<Uint8Array | string>,
    flags: Uint8Array | string,
  }
}

export class SubmitTransactionRequest extends jspb.Message {
  getTransaction(): Uint8Array | string;
  getTransaction_asU8(): Uint8Array;
  getTransaction_asB64(): string;
  setTransaction(value: Uint8Array | string): SubmitTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionRequest): SubmitTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionRequest;
  static deserializeBinaryFromReader(message: SubmitTransactionRequest, reader: jspb.BinaryReader): SubmitTransactionRequest;
}

export namespace SubmitTransactionRequest {
  export type AsObject = {
    transaction: Uint8Array | string,
  }
}

export class SubmitTransactionResponse extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): SubmitTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitTransactionResponse): SubmitTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitTransactionResponse;
  static deserializeBinaryFromReader(message: SubmitTransactionResponse, reader: jspb.BinaryReader): SubmitTransactionResponse;
}

export namespace SubmitTransactionResponse {
  export type AsObject = {
    hash: Uint8Array | string,
  }
}

export class SubscribeTransactionsRequest extends jspb.Message {
  getSubscribe(): TransactionFilter | undefined;
  setSubscribe(value?: TransactionFilter): SubscribeTransactionsRequest;
  hasSubscribe(): boolean;
  clearSubscribe(): SubscribeTransactionsRequest;

  getUnsubscribe(): TransactionFilter | undefined;
  setUnsubscribe(value?: TransactionFilter): SubscribeTransactionsRequest;
  hasUnsubscribe(): boolean;
  clearUnsubscribe(): SubscribeTransactionsRequest;

  getIncludeMempool(): boolean;
  setIncludeMempool(value: boolean): SubscribeTransactionsRequest;

  getIncludeInBlock(): boolean;
  setIncludeInBlock(value: boolean): SubscribeTransactionsRequest;

  getSerializeTx(): boolean;
  setSerializeTx(value: boolean): SubscribeTransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeTransactionsRequest): SubscribeTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeTransactionsRequest;
  static deserializeBinaryFromReader(message: SubscribeTransactionsRequest, reader: jspb.BinaryReader): SubscribeTransactionsRequest;
}

export namespace SubscribeTransactionsRequest {
  export type AsObject = {
    subscribe?: TransactionFilter.AsObject,
    unsubscribe?: TransactionFilter.AsObject,
    includeMempool: boolean,
    includeInBlock: boolean,
    serializeTx: boolean,
  }
}

export class SubscribeBlocksRequest extends jspb.Message {
  getFullBlock(): boolean;
  setFullBlock(value: boolean): SubscribeBlocksRequest;

  getFullTransactions(): boolean;
  setFullTransactions(value: boolean): SubscribeBlocksRequest;

  getSerializeBlock(): boolean;
  setSerializeBlock(value: boolean): SubscribeBlocksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeBlocksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeBlocksRequest): SubscribeBlocksRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeBlocksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeBlocksRequest;
  static deserializeBinaryFromReader(message: SubscribeBlocksRequest, reader: jspb.BinaryReader): SubscribeBlocksRequest;
}

export namespace SubscribeBlocksRequest {
  export type AsObject = {
    fullBlock: boolean,
    fullTransactions: boolean,
    serializeBlock: boolean,
  }
}

export class BlockNotification extends jspb.Message {
  getType(): BlockNotification.Type;
  setType(value: BlockNotification.Type): BlockNotification;

  getBlockInfo(): BlockInfo | undefined;
  setBlockInfo(value?: BlockInfo): BlockNotification;
  hasBlockInfo(): boolean;
  clearBlockInfo(): BlockNotification;

  getMarshaledBlock(): Block | undefined;
  setMarshaledBlock(value?: Block): BlockNotification;
  hasMarshaledBlock(): boolean;
  clearMarshaledBlock(): BlockNotification;

  getSerializedBlock(): Uint8Array | string;
  getSerializedBlock_asU8(): Uint8Array;
  getSerializedBlock_asB64(): string;
  setSerializedBlock(value: Uint8Array | string): BlockNotification;

  getBlockCase(): BlockNotification.BlockCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockNotification.AsObject;
  static toObject(includeInstance: boolean, msg: BlockNotification): BlockNotification.AsObject;
  static serializeBinaryToWriter(message: BlockNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockNotification;
  static deserializeBinaryFromReader(message: BlockNotification, reader: jspb.BinaryReader): BlockNotification;
}

export namespace BlockNotification {
  export type AsObject = {
    type: BlockNotification.Type,
    blockInfo?: BlockInfo.AsObject,
    marshaledBlock?: Block.AsObject,
    serializedBlock: Uint8Array | string,
  }

  export enum Type { 
    CONNECTED = 0,
    DISCONNECTED = 1,
  }

  export enum BlockCase { 
    BLOCK_NOT_SET = 0,
    BLOCK_INFO = 2,
    MARSHALED_BLOCK = 3,
    SERIALIZED_BLOCK = 4,
  }
}

export class TransactionNotification extends jspb.Message {
  getType(): TransactionNotification.Type;
  setType(value: TransactionNotification.Type): TransactionNotification;

  getConfirmedTransaction(): Transaction | undefined;
  setConfirmedTransaction(value?: Transaction): TransactionNotification;
  hasConfirmedTransaction(): boolean;
  clearConfirmedTransaction(): TransactionNotification;

  getUnconfirmedTransaction(): MempoolTransaction | undefined;
  setUnconfirmedTransaction(value?: MempoolTransaction): TransactionNotification;
  hasUnconfirmedTransaction(): boolean;
  clearUnconfirmedTransaction(): TransactionNotification;

  getSerializedTransaction(): Uint8Array | string;
  getSerializedTransaction_asU8(): Uint8Array;
  getSerializedTransaction_asB64(): string;
  setSerializedTransaction(value: Uint8Array | string): TransactionNotification;

  getTransactionCase(): TransactionNotification.TransactionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionNotification.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionNotification): TransactionNotification.AsObject;
  static serializeBinaryToWriter(message: TransactionNotification, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionNotification;
  static deserializeBinaryFromReader(message: TransactionNotification, reader: jspb.BinaryReader): TransactionNotification;
}

export namespace TransactionNotification {
  export type AsObject = {
    type: TransactionNotification.Type,
    confirmedTransaction?: Transaction.AsObject,
    unconfirmedTransaction?: MempoolTransaction.AsObject,
    serializedTransaction: Uint8Array | string,
  }

  export enum Type { 
    UNCONFIRMED = 0,
    CONFIRMED = 1,
  }

  export enum TransactionCase { 
    TRANSACTION_NOT_SET = 0,
    CONFIRMED_TRANSACTION = 2,
    UNCONFIRMED_TRANSACTION = 3,
    SERIALIZED_TRANSACTION = 4,
  }
}

export class BlockInfo extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): BlockInfo;

  getHeight(): number;
  setHeight(value: number): BlockInfo;

  getVersion(): number;
  setVersion(value: number): BlockInfo;

  getPreviousBlock(): Uint8Array | string;
  getPreviousBlock_asU8(): Uint8Array;
  getPreviousBlock_asB64(): string;
  setPreviousBlock(value: Uint8Array | string): BlockInfo;

  getMerkleRoot(): Uint8Array | string;
  getMerkleRoot_asU8(): Uint8Array;
  getMerkleRoot_asB64(): string;
  setMerkleRoot(value: Uint8Array | string): BlockInfo;

  getTimestamp(): number;
  setTimestamp(value: number): BlockInfo;

  getBits(): number;
  setBits(value: number): BlockInfo;

  getNonce(): number;
  setNonce(value: number): BlockInfo;

  getConfirmations(): number;
  setConfirmations(value: number): BlockInfo;

  getDifficulty(): number;
  setDifficulty(value: number): BlockInfo;

  getNextBlockHash(): Uint8Array | string;
  getNextBlockHash_asU8(): Uint8Array;
  getNextBlockHash_asB64(): string;
  setNextBlockHash(value: Uint8Array | string): BlockInfo;

  getSize(): number;
  setSize(value: number): BlockInfo;

  getMedianTime(): number;
  setMedianTime(value: number): BlockInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BlockInfo.AsObject;
  static toObject(includeInstance: boolean, msg: BlockInfo): BlockInfo.AsObject;
  static serializeBinaryToWriter(message: BlockInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BlockInfo;
  static deserializeBinaryFromReader(message: BlockInfo, reader: jspb.BinaryReader): BlockInfo;
}

export namespace BlockInfo {
  export type AsObject = {
    hash: Uint8Array | string,
    height: number,
    version: number,
    previousBlock: Uint8Array | string,
    merkleRoot: Uint8Array | string,
    timestamp: number,
    bits: number,
    nonce: number,
    confirmations: number,
    difficulty: number,
    nextBlockHash: Uint8Array | string,
    size: number,
    medianTime: number,
  }
}

export class Block extends jspb.Message {
  getInfo(): BlockInfo | undefined;
  setInfo(value?: BlockInfo): Block;
  hasInfo(): boolean;
  clearInfo(): Block;

  getTransactionDataList(): Array<Block.TransactionData>;
  setTransactionDataList(value: Array<Block.TransactionData>): Block;
  clearTransactionDataList(): Block;
  addTransactionData(value?: Block.TransactionData, index?: number): Block.TransactionData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    info?: BlockInfo.AsObject,
    transactionDataList: Array<Block.TransactionData.AsObject>,
  }

  export class TransactionData extends jspb.Message {
    getTransactionHash(): Uint8Array | string;
    getTransactionHash_asU8(): Uint8Array;
    getTransactionHash_asB64(): string;
    setTransactionHash(value: Uint8Array | string): TransactionData;

    getTransaction(): Transaction | undefined;
    setTransaction(value?: Transaction): TransactionData;
    hasTransaction(): boolean;
    clearTransaction(): TransactionData;

    getTxidsOrTxsCase(): TransactionData.TxidsOrTxsCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TransactionData.AsObject;
    static toObject(includeInstance: boolean, msg: TransactionData): TransactionData.AsObject;
    static serializeBinaryToWriter(message: TransactionData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TransactionData;
    static deserializeBinaryFromReader(message: TransactionData, reader: jspb.BinaryReader): TransactionData;
  }

  export namespace TransactionData {
    export type AsObject = {
      transactionHash: Uint8Array | string,
      transaction?: Transaction.AsObject,
    }

    export enum TxidsOrTxsCase { 
      TXIDS_OR_TXS_NOT_SET = 0,
      TRANSACTION_HASH = 1,
      TRANSACTION = 2,
    }
  }

}

export class Transaction extends jspb.Message {
  getHash(): Uint8Array | string;
  getHash_asU8(): Uint8Array;
  getHash_asB64(): string;
  setHash(value: Uint8Array | string): Transaction;

  getVersion(): number;
  setVersion(value: number): Transaction;

  getInputsList(): Array<Transaction.Input>;
  setInputsList(value: Array<Transaction.Input>): Transaction;
  clearInputsList(): Transaction;
  addInputs(value?: Transaction.Input, index?: number): Transaction.Input;

  getOutputsList(): Array<Transaction.Output>;
  setOutputsList(value: Array<Transaction.Output>): Transaction;
  clearOutputsList(): Transaction;
  addOutputs(value?: Transaction.Output, index?: number): Transaction.Output;

  getLockTime(): number;
  setLockTime(value: number): Transaction;

  getSize(): number;
  setSize(value: number): Transaction;

  getTimestamp(): number;
  setTimestamp(value: number): Transaction;

  getConfirmations(): number;
  setConfirmations(value: number): Transaction;

  getBlockHeight(): number;
  setBlockHeight(value: number): Transaction;

  getBlockHash(): Uint8Array | string;
  getBlockHash_asU8(): Uint8Array;
  getBlockHash_asB64(): string;
  setBlockHash(value: Uint8Array | string): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    hash: Uint8Array | string,
    version: number,
    inputsList: Array<Transaction.Input.AsObject>,
    outputsList: Array<Transaction.Output.AsObject>,
    lockTime: number,
    size: number,
    timestamp: number,
    confirmations: number,
    blockHeight: number,
    blockHash: Uint8Array | string,
  }

  export class Input extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): Input;

    getOutpoint(): Transaction.Input.Outpoint | undefined;
    setOutpoint(value?: Transaction.Input.Outpoint): Input;
    hasOutpoint(): boolean;
    clearOutpoint(): Input;

    getSignatureScript(): Uint8Array | string;
    getSignatureScript_asU8(): Uint8Array;
    getSignatureScript_asB64(): string;
    setSignatureScript(value: Uint8Array | string): Input;

    getSequence(): number;
    setSequence(value: number): Input;

    getValue(): number;
    setValue(value: number): Input;

    getPreviousScript(): Uint8Array | string;
    getPreviousScript_asU8(): Uint8Array;
    getPreviousScript_asB64(): string;
    setPreviousScript(value: Uint8Array | string): Input;

    getAddress(): string;
    setAddress(value: string): Input;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Input.AsObject;
    static toObject(includeInstance: boolean, msg: Input): Input.AsObject;
    static serializeBinaryToWriter(message: Input, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Input;
    static deserializeBinaryFromReader(message: Input, reader: jspb.BinaryReader): Input;
  }

  export namespace Input {
    export type AsObject = {
      index: number,
      outpoint?: Transaction.Input.Outpoint.AsObject,
      signatureScript: Uint8Array | string,
      sequence: number,
      value: number,
      previousScript: Uint8Array | string,
      address: string,
    }

    export class Outpoint extends jspb.Message {
      getHash(): Uint8Array | string;
      getHash_asU8(): Uint8Array;
      getHash_asB64(): string;
      setHash(value: Uint8Array | string): Outpoint;

      getIndex(): number;
      setIndex(value: number): Outpoint;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Outpoint.AsObject;
      static toObject(includeInstance: boolean, msg: Outpoint): Outpoint.AsObject;
      static serializeBinaryToWriter(message: Outpoint, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Outpoint;
      static deserializeBinaryFromReader(message: Outpoint, reader: jspb.BinaryReader): Outpoint;
    }

    export namespace Outpoint {
      export type AsObject = {
        hash: Uint8Array | string,
        index: number,
      }
    }

  }


  export class Output extends jspb.Message {
    getIndex(): number;
    setIndex(value: number): Output;

    getValue(): number;
    setValue(value: number): Output;

    getPubkeyScript(): Uint8Array | string;
    getPubkeyScript_asU8(): Uint8Array;
    getPubkeyScript_asB64(): string;
    setPubkeyScript(value: Uint8Array | string): Output;

    getAddress(): string;
    setAddress(value: string): Output;

    getScriptClass(): string;
    setScriptClass(value: string): Output;

    getDisassembledScript(): string;
    setDisassembledScript(value: string): Output;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Output.AsObject;
    static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
    static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Output;
    static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
  }

  export namespace Output {
    export type AsObject = {
      index: number,
      value: number,
      pubkeyScript: Uint8Array | string,
      address: string,
      scriptClass: string,
      disassembledScript: string,
    }
  }

}

export class MempoolTransaction extends jspb.Message {
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): MempoolTransaction;
  hasTransaction(): boolean;
  clearTransaction(): MempoolTransaction;

  getAddedTime(): number;
  setAddedTime(value: number): MempoolTransaction;

  getAddedHeight(): number;
  setAddedHeight(value: number): MempoolTransaction;

  getFee(): number;
  setFee(value: number): MempoolTransaction;

  getFeePerKb(): number;
  setFeePerKb(value: number): MempoolTransaction;

  getStartingPriority(): number;
  setStartingPriority(value: number): MempoolTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MempoolTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: MempoolTransaction): MempoolTransaction.AsObject;
  static serializeBinaryToWriter(message: MempoolTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MempoolTransaction;
  static deserializeBinaryFromReader(message: MempoolTransaction, reader: jspb.BinaryReader): MempoolTransaction;
}

export namespace MempoolTransaction {
  export type AsObject = {
    transaction?: Transaction.AsObject,
    addedTime: number,
    addedHeight: number,
    fee: number,
    feePerKb: number,
    startingPriority: number,
  }
}

export class UnspentOutput extends jspb.Message {
  getOutpoint(): Transaction.Input.Outpoint | undefined;
  setOutpoint(value?: Transaction.Input.Outpoint): UnspentOutput;
  hasOutpoint(): boolean;
  clearOutpoint(): UnspentOutput;

  getPubkeyScript(): Uint8Array | string;
  getPubkeyScript_asU8(): Uint8Array;
  getPubkeyScript_asB64(): string;
  setPubkeyScript(value: Uint8Array | string): UnspentOutput;

  getValue(): number;
  setValue(value: number): UnspentOutput;

  getIsCoinbase(): boolean;
  setIsCoinbase(value: boolean): UnspentOutput;

  getBlockHeight(): number;
  setBlockHeight(value: number): UnspentOutput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnspentOutput.AsObject;
  static toObject(includeInstance: boolean, msg: UnspentOutput): UnspentOutput.AsObject;
  static serializeBinaryToWriter(message: UnspentOutput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnspentOutput;
  static deserializeBinaryFromReader(message: UnspentOutput, reader: jspb.BinaryReader): UnspentOutput;
}

export namespace UnspentOutput {
  export type AsObject = {
    outpoint?: Transaction.Input.Outpoint.AsObject,
    pubkeyScript: Uint8Array | string,
    value: number,
    isCoinbase: boolean,
    blockHeight: number,
  }
}

export class TransactionFilter extends jspb.Message {
  getAddressesList(): Array<string>;
  setAddressesList(value: Array<string>): TransactionFilter;
  clearAddressesList(): TransactionFilter;
  addAddresses(value: string, index?: number): TransactionFilter;

  getOutpointsList(): Array<Transaction.Input.Outpoint>;
  setOutpointsList(value: Array<Transaction.Input.Outpoint>): TransactionFilter;
  clearOutpointsList(): TransactionFilter;
  addOutpoints(value?: Transaction.Input.Outpoint, index?: number): Transaction.Input.Outpoint;

  getDataElementsList(): Array<Uint8Array | string>;
  setDataElementsList(value: Array<Uint8Array | string>): TransactionFilter;
  clearDataElementsList(): TransactionFilter;
  addDataElements(value: Uint8Array | string, index?: number): TransactionFilter;

  getAllTransactions(): boolean;
  setAllTransactions(value: boolean): TransactionFilter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionFilter.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionFilter): TransactionFilter.AsObject;
  static serializeBinaryToWriter(message: TransactionFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionFilter;
  static deserializeBinaryFromReader(message: TransactionFilter, reader: jspb.BinaryReader): TransactionFilter;
}

export namespace TransactionFilter {
  export type AsObject = {
    addressesList: Array<string>,
    outpointsList: Array<Transaction.Input.Outpoint.AsObject>,
    dataElementsList: Array<Uint8Array | string>,
    allTransactions: boolean,
  }
}

