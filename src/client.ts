import { Buffer } from "buffer";
import * as grpcWeb from "grpc-web";
import * as bchrpc from "../pb/bchrpc_pb";
import * as bchrpc_pb_service from "../pb/BchrpcServiceClientPb";

export class GrpcClient {
    public client: bchrpc_pb_service.bchrpcClient;

    constructor({ url, testnet = false, options }:
        { url?: string; testnet?: boolean; options: null | { [index: string]: string; } }) {
        if (!url && !testnet) {
            url = "bchd.fountainhead.cash:443";
            url = "https://bchd.greyh.at:8335";
        
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

    public getRawMempool(
        { }: {},
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetMempoolResponse> {
        const req = new bchrpc.GetMempoolRequest();
        req.setFullTransactions(false);
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


    public getRawTransaction(
        { hash, reverseOrder, reversedHashOrder }:
            { hash: string; reverseOrder?: boolean; reversedHashOrder?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetRawTransactionResponse> {
        const req = new bchrpc.GetRawTransactionRequest();
        if (reverseOrder || reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
        } else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
        }
        return new Promise((resolve, reject) => {
            this.client.getRawTransaction(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetRawTransactionResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public getTransaction(
        { hash, reverseOrder, reversedHashOrder }:
            { hash: string; reverseOrder?: boolean; reversedHashOrder?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetTransactionResponse> {
        const req = new bchrpc.GetTransactionRequest();
        if (reverseOrder || reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
        } else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
        }
        return new Promise((resolve, reject) => {
            this.client.getTransaction(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetTransactionResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public getAddressTransactions({ address, nbSkip, nbFetch, height, hash, reversedHashOrder }:
        {
            address: string,
            nbSkip?: number,
            nbFetch?: number,
            height?: number,
            hash?: string,
            reversedHashOrder?: boolean
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
        if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
            } else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
            }
        }
        req.setAddress(address);
        return new Promise((resolve, reject) => {
            this.client.getAddressTransactions(req, metadata, (err: grpcWeb.Error, response: bchrpc.GetAddressTransactionsResponse) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public getUnspentOutput(
        { hash, vout, reversedHashOrder, includeMempool }:
            {
                hash: string, vout: number, reversedHashOrder?: boolean,
                includeMempool?: boolean
            }
        , metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetUnspentOutputResponse> {
        const req = new bchrpc.GetUnspentOutputRequest();
        if (includeMempool) {
            req.setIncludeMempool(true);
        }
        if (reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
        } else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
        }
        req.setIndex(vout);
        return new Promise((resolve, reject) => {
            this.client.getUnspentOutput(req, metadata, (err, data) => {
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

    public getRawBlock(
        { hash, reverseOrder, reversedHashOrder }:
            { hash: string; reverseOrder?: boolean; reversedHashOrder?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetRawBlockResponse> {
        const req = new bchrpc.GetRawBlockRequest();
        if (reverseOrder || reversedHashOrder) {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
        } else {
            req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
        }
        return new Promise((resolve, reject) => {
            this.client.getRawBlock(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

    public getBlock(
        { index, hash, reversedHashOrder, fullTransactions }:
            { index?: number, hash?: string, reversedHashOrder?: boolean, fullTransactions?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetBlockResponse> {
        const req = new bchrpc.GetBlockRequest();
        if (index !== null && index !== undefined) {
            req.setHeight(index);
        } else if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
            } else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
            }
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

    public getBlockInfo(
        { index, hash, reversedHashOrder }:
            { index?: number, hash?: string, reversedHashOrder?: boolean },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.GetBlockInfoResponse> {
        const req = new bchrpc.GetBlockInfoRequest();
        if (index !== null && index !== undefined) { req.setHeight(index); } else if (hash) {
            if (reversedHashOrder) {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))).reverse());
            } else {
                req.setHash(new Uint8Array(hash.match(/.{1,2}/g)!.map((byte) => parseInt(byte, 16))));
            }
        } else {
            throw Error("No index or hash provided for block");
        }
        return new Promise((resolve, reject) => {
            this.client.getBlockInfo(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }

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
        { txnBuf, txnHex, txn }: { txnBuf?: Buffer, txnHex?: string, txn?: Uint8Array },
        metadata: grpcWeb.Metadata | null
    ): Promise<bchrpc.SubmitTransactionResponse> {
        let tx: string | Uint8Array;
        const req = new bchrpc.SubmitTransactionRequest();
        if (txnBuf) {
            tx = txnBuf.toString("base64");
        } else if (txnHex) {
            tx = Buffer.from(txnHex, "hex").toString("base64");
        } else if (txn) {
            tx = txn;
        } else {
            throw Error("Most provide either Hex string, Buffer, or Uint8Array");
        }
        req.setTransaction(tx);
        return new Promise((resolve, reject) => {
            this.client.submitTransaction(req, metadata, (err, response) => {
                if (err !== null) { reject(err); } else { resolve(response!); }
            });
        });
    }
}