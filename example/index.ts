import * as grpcWeb from 'grpc-web';

import { GrpcClient } from "grpc-bchrpc-browser";
import {
    SubscribeTransactionsRequest,
    TransactionFilter,
    TransactionNotification
} from "grpc-bchrpc-browser";


const client = new GrpcClient(
    {
        //url: "https://bchd.fountainhead.cash",
        //url: "https://bchd.sploit.cash",
        //url: "https://bchd.imaginary.cash:8335",
        url: "https://bchd.greyh.at:8335",
        testnet: false,
        options: {}
    }
);

function asHex(u8: Uint8Array){
    return Buffer.from(u8.reverse()).toString("hex")
}
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
            includeSerializedTxn: false
        })

        this.stream.on('data', function (message: TransactionNotification) {
            const mempool_tx = message.getUnconfirmedTransaction()!
            if(mempool_tx){
                const tx = mempool_tx.getTransaction()!
                console.log("added: " + mempool_tx.getAddedTime())
                console.log("height: " + mempool_tx.getAddedHeight())
                console.log("txn: " + Buffer.from(tx.getHash_asU8().reverse()).toString("hex"))
                console.log("    size: " + tx.getSize())
                console.log("    inputs: " )
                for(const input of tx.getInputsList()){
                    console.log("        " + input.getIndex() + " "  + asHex(input.getPreviousScript_asU8()))
                    console.log("        " + input.getIndex() +  " " + input.getAddress() + " " + input.getValue() + "  " )
                    console.log("        " + input.getIndex() + " "  + asHex(input.getSignatureScript_asU8()))
                }
                console.log("    outputs: " )
                for(const output of tx.getOutputsList()){
                    console.log("        " + output.getIndex() + " " +  output.getScriptClass() + " " + output.getAddress() + " " + output.getValue() + " " + asHex(output.getPubkeyScript_asU8()))
                    console.log("        " + output.getIndex() + " " + output.getDisassembledScript())
                }
                console.log("    locktime: " + tx.getLockTime())
                console.log("    size: " + tx.getSize())
            }
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