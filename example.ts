export * from "./pb/bchrpc_pb";
export * from "./pb/BchrpcServiceClientPb";
export * from "./src/client";
export * from "grpc-web";

import { GrpcClient } from "./src/client"
import * as grpcWeb from 'grpc-web';
import {
    SubscribeTransactionsRequest,
    TransactionFilter,
    TransactionNotification
} from "./pb/bchrpc_pb";


const client = new GrpcClient(
    {
        //url: "https://bchd.fountainhead.cash",
        url: "https://bchd.sploit.cash",
        //url: "https://bchd.imaginary.cash:8335",
        //url: "https://bchd.greyh.at:8335",
        testnet: false,
        options: {}
    }
);


class Live {

    stream?: grpcWeb.ClientReadableStream<TransactionNotification>;


    async subscribeMempool() {
        var filter = new TransactionFilter();
        filter.setAllTransactions(true)

        var subscribreTransactionRequest = new SubscribeTransactionsRequest();
        subscribreTransactionRequest.setIncludeMempool(true)
        subscribreTransactionRequest.setSubscribe(filter)

        this.stream = await client.subscribeTransactions({
            includeMempoolAcceptance: true,
            includeBlockAcceptance: true,
            includeSerializedTxn: true
        })

        this.stream.on('data', function (message: TransactionNotification) {
            console.log(Buffer.from(message.getSerializedTransaction_asU8()).toString('hex'))
            
        });
        this.stream.on('status', function (status) {
            console.log(status)
        });
        this.stream.on('error', (err: grpcWeb.Error) => {
            console.log(
                'Error code: ' + err.code + ' "' + err.message + '"');
          });
        this.stream.on('end', function () {
            console.log('stream end signal received');
        });
    }

}



const l = new Live();
l.subscribeMempool()