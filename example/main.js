document.addEventListener('DOMContentLoaded', async function () {

    //
    // Bootstrapping
    //

    // Initialize our Console widget - it will log browser window.
    document
        .getElementById('consoleArea')
        .appendChild(console.textarea);

    // Test it:
    console.log("Hello! subscribe via the button below");
    try {
        if (window.Worker) {
            let startWorkerButton = document.getElementById('startWorker')
            startWorkerButton.onclick = function () { bchrpcMempoolSubscription.subscribeMempool(); };

            let stopWorkerButton = document.getElementById('stopWorker')
            stopWorkerButton.onclick = function () { bchrpcMempoolSubscription.unsubscribeMempool(); };

            let clearConsoleButton = document.getElementById('clearConsole')
            clearConsoleButton.onclick = function () { console.clear(); };
        } else {
            console.log('Your browser doesn\'t support web workers.')
        }
    } catch (ex) {
        console.log(ex);
    }
});

const mainnet = new GrpcClient(
    {
        url: "https://bchd.fountainhead.cash",
        testnet: false,
        options: {}
    }
);

const hexArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const reduceToHex = (s, c) => s + hexArray[c >>> 4] + hexArray[c & 0x0F]

var u8toHex = function (u8) {
    return u8.reduce(reduceToHex, '')
}

var asHex = function (u8) {
    return u8toHex(u8.reverse())
}

class MempoolSubscription {

    stream;
    client;

    constructor(c) {
        this.client = c;
    }

    async unsubscribeMempool() {
        console.log("Canceling subscription... ")
        await this.stream.cancel()
        console.log("subscription canceled")
    }
    async subscribeMempool() {
        console.log("Subscribing to unconfirmed transactions... ")
        var filter = new TransactionFilter();
        filter.setAllTransactions(true)

        var subscribreTransactionRequest = new SubscribeTransactionsRequest();
        subscribreTransactionRequest.setIncludeMempool(true)
        subscribreTransactionRequest.setSubscribe(filter)

        this.stream = await this.client.subscribeTransactions({
            includeMempoolAcceptance: true,
            includeBlockAcceptance: true,
            includeSerializedTxn: false,
            subscribeAllTransactions: true,
        })

        this.stream.on('data', function (txnNotification) {
            const mempool_tx = txnNotification.getUnconfirmedTransaction()
            if (mempool_tx) {
                const tx = mempool_tx.getTransaction()
                console.log("added: " + mempool_tx.getAddedTime())
                console.log("height: " + mempool_tx.getAddedHeight())
                console.log("txn: " + u8toHex(tx.getHash_asU8().reverse()))
                console.log("    size: " + tx.getSize())
                console.log("    inputs: ")
                for (const input of tx.getInputsList()) {
                    console.log("        " + input.getIndex() + " " + asHex(input.getPreviousScript_asU8()))
                    console.log("        " + input.getIndex() + " " + input.getAddress() + " " + input.getValue() + "  ")
                    //console.log("        " + input.getIndex() + " "  + asHex(input.getSignatureScript_asU8()))
                }
                console.log("    outputs: ")
                for (const output of tx.getOutputsList()) {
                    console.log("        " + output.getIndex() + " " + output.getScriptClass() + " " + output.getAddress() + " " + output.getValue() + " " + asHex(output.getPubkeyScript_asU8()))
                    console.log("        " + output.getIndex() + " " + output.getDisassembledScript())
                }
                console.log("    locktime: " + tx.getLockTime())
                console.log("    size: " + tx.getSize())
            }
        });
        this.stream.on('status', function (status) {
            console.log(status)
        });
        this.stream.on('error', (err) => {
            console.log(
                'Error code: ' + err.code + ' "' + err.message + '"');
        });
        this.stream.on('end', function () {
            console.log('stream end signal received');
        });
    }

}

let bchrpcMempoolSubscription = new MempoolSubscription(mainnet);

var Console = /** @class */ (function () {
    function Console() {
        this.error = function (txt) {
            this.log(txt, "ERROR!");
        };
        this.textarea = document.createElement('textarea');
    }
    Console.prototype.log = function (txt, type) {
        if (type)
            this.textarea.value += type + " ";
        this.textarea.value += txt + "\n";
    };   
    Console.prototype.clear = function () {
        this.textarea.value = " ";
    };
    return Console;
}());
var console = new Console();
