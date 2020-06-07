"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const buffer_1 = require("buffer");
const chai_1 = require("chai");
const bchrpc_pb_1 = require("./pb/bchrpc_pb");
const index_1 = require("./index");
// Security notice:
// Below is a collection of tools to approximate core javascript libraries that were not in nodejs.
//
// These libraries are only used for testing and should not be exported in the final module.
//
const xhr2_1 = require("xhr2");
const webcrypto_1 = require("@peculiar/webcrypto");
const mainnet = new index_1.GrpcClient({
    //url: "https://bchd.fountainhead.cash",
    url: "https://bchd.sploit.cash",
    testnet: false,
    options: {}
});
const badClient = new index_1.GrpcClient({
    url: "https://bchd.example.cash",
    testnet: false,
    options: {}
});
const cat = (a, b) => {
    // If an argument is missing, assume it is a starting hash and return it
    if (!a) {
        return b;
    }
    if (!b) {
        return a;
    }
    return a + b;
};
/*
   If running within nodejs, import these substitutes for core libraries
*/
if (typeof window === 'undefined') {
    global.XMLHttpRequest = xhr2_1.XMLHttpRequest;
    global.crypto = new webcrypto_1.Crypto();
    global.atob = function (str) {
        return buffer_1.Buffer.from(str, 'base64').toString('binary');
    };
    global.btoa = function (str) {
        var buffer;
        if (str instanceof buffer_1.Buffer) {
            buffer = str;
        }
        else {
            buffer = buffer_1.Buffer.from(str.toString(), 'binary');
        }
        return buffer.toString('base64');
    };
}
describe("grpc-bchrpc-browser", () => {
    it("getBlockchainInfo returns mainnet node with address and tx index enabled", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield mainnet.getBlockchainInfo({}, null);
        chai_1.assert.equal(res.getBitcoinNet(), bchrpc_pb_1.GetBlockchainInfoResponse.BitcoinNet.MAINNET, "Check node is on mainnet");
        chai_1.assert.equal(res.getAddrIndex(), true, "Check address index is enabled");
        chai_1.assert.equal(res.getTxIndex(), true, "Check transaction index is enabled");
    }));
    it("getBlockInfo for index 0", () => __awaiter(void 0, void 0, void 0, function* () {
        // returns the first block by default
        const info = yield mainnet.getBlockInfo({}, null);
        chai_1.assert.equal(info.getInfo().getHeight(), 0);
        chai_1.assert.equal(info.getInfo().getVersion(), 1);
        chai_1.assert.equal(info.getInfo().getPreviousBlock_asB64(), "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=");
        chai_1.assert.equal(info.getInfo().getMerkleRoot_asB64(), "O6Pt/Xp7ErJ6xyw+Z3aPYX/IG8OIilEyOp+4qkseXko=");
        chai_1.assert.equal(info.getInfo().getTimestamp(), 1231006505);
        chai_1.assert.equal(info.getInfo().getMedianTime(), 1231006505);
        chai_1.assert.equal(info.getInfo().getDifficulty(), 1);
        chai_1.assert.equal(info.getInfo().getNextBlockHash_asB64(), "SGDrGL8bFiDjfpSQ/IpCdRRBb9dRWauGaI6agwAAAAA=");
        const hash = buffer_1.Buffer.from(info.getInfo().getHash_asU8().reverse()).toString("hex");
        chai_1.assert.equal(hash, "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
    }));
    it("getBlockInfo for hex hash 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f", () => __awaiter(void 0, void 0, void 0, function* () {
        const hashHex = "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f";
        const info = yield mainnet.getBlockInfo({ hashHex: hashHex }, null);
        chai_1.assert.equal(info.getInfo().getHeight(), 0);
        const hash = buffer_1.Buffer.from(info.getInfo().getHash_asU8().reverse()).toString("hex");
        chai_1.assert.equal(hash, "000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
    }));
    it("getBlockInfo for hash b+KMCrbxs3LBpqJGrmP3T5Meg2XhWgicaNYZAAAAAAA=", () => __awaiter(void 0, void 0, void 0, function* () {
        const hexString = "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048";
        const hashArray = Uint8Array.from(buffer_1.Buffer.from(hexString, 'hex')).reverse();
        const hash = buffer_1.Buffer.from(hashArray).toString('base64'); // "b+KMCrbxs3LBpqJGrmP3T5Meg2XhWgicaNYZAAAAAAA="
        const info = yield mainnet.getBlockInfo({ hash: hash }, null);
        chai_1.assert.equal(info.getInfo().getHeight(), 1);
        const hashHex = buffer_1.Buffer.from(info.getInfo().getHash_asU8().reverse()).toString("hex");
        chai_1.assert.equal(hashHex, "00000000839a8e6886ab5951d76f411475428afc90947ee320161bbf18eb6048");
    }));
    it("getHeaders from first block", () => __awaiter(void 0, void 0, void 0, function* () {
        const locatorHashes = ["AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA="];
        const resp = yield mainnet.getHeaders({ blockLocatorHashes: locatorHashes }, null);
        chai_1.assert.equal(resp.getHeadersList().length, 2000, "2000 block headers were returned");
    }));
    // 66faf1d89f76a1039e367462fc489ccb4003e5c6df05b3d6c9ca5e686569d724 a coinbase transaction
    // 
    it("getRawTransaction returns a serialized raw tx with matching hash", () => __awaiter(void 0, void 0, void 0, function* () {
        const txHex = "11556da6ee3cb1d14727b3a8f4b37093b6fecd2bc7d577a02b4e98b7be58a7e8";
        const txArray = Uint8Array.from(buffer_1.Buffer.from(txHex, 'hex')).reverse();
        const hash = buffer_1.Buffer.from(txArray).toString('base64'); // 
        const res = yield mainnet.getRawTransaction({ hash: hash }, null);
        const hashOne = yield crypto.subtle.digest('SHA-256', res.getTransaction_asU8());
        const hashTwo = yield crypto.subtle.digest('SHA-256', hashOne);
        const hashHash = yield mainnet.sha256sha256(res.getTransaction_asU8());
        chai_1.assert.equal(hashHash, hashHash, "check double sha function");
        const hashTwo_u8 = new Uint8Array(hashTwo);
        chai_1.assert.equal(hash, buffer_1.Buffer.from(hashTwo_u8).toString('base64'), "check that raw transaction matches it's hash");
    }));
    it("getRawTransaction without a transaction should throw error", () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield mainnet.getRawTransaction({}, null);
        }
        catch (err) {
            chai_1.assert.equal(err.message, "No hash provided for transaction");
        }
    }));
    it("getRawBlock should return a block with a valid block header", () => __awaiter(void 0, void 0, void 0, function* () {
        const blockHash = "SGDrGL8bFiDjfpSQ/IpCdRRBb9dRWauGaI6agwAAAAA=";
        const block = yield mainnet.getRawBlock({ hash: blockHash }, null);
        const hashOne = yield crypto.subtle.digest('SHA-256', block.getBlock_asU8().slice(0, 80));
        const hashTwo = yield crypto.subtle.digest('SHA-256', hashOne);
        const hashTwo_u8 = new Uint8Array(hashTwo);
        chai_1.assert.equal(blockHash, buffer_1.Buffer.from(hashTwo_u8).toString('base64'), "check that the header matches the query");
    }));
    it("getMerkleRootFromProof should build merkle tree", () => __awaiter(void 0, void 0, void 0, function* () {
        let block15000 = new Map();
        block15000.set(11111, ["A", "B", "CD", "EFGH", "IJ"]);
        block15000.set(111101, ["A", "B", "CD", "EFGH", "IJ"]);
        block15000.set(111011, ["AB", "C", "D", "EFGH", "IJ"]);
        block15000.set(1110101, ["AB", "C", "D", "EFGH", "IJ"]);
        block15000.set(110111, ["ABCD", "E", "F", "GH", "IJ"]);
        block15000.set(1101101, ["ABCD", "E", "F", "GH", "IJ"]);
        block15000.set(1101011, ["ABCD", "EF", "G", "H", "IJ"]);
        block15000.set(11010101, ["ABCD", "EF", "G", "H", "IJ"]);
        block15000.set(101111, ["ABCDEFGH", "I", "J"]);
        block15000.set(1011101, ["ABCDEFGH", "I", "J"]);
        block15000.forEach((value, key) => __awaiter(void 0, void 0, void 0, function* () {
            let flagArray = String(key).split("").map(x => parseInt(x));
            chai_1.assert.isTrue(String("ABCDEFGHIJ") === String(yield mainnet.getMerkleRootFromProof(value, flagArray, cat)));
        }));
    }));
    it("hashPair returns sha256(sha256(ab)) from hex", () => __awaiter(void 0, void 0, void 0, function* () {
        // These are little endian hex strings
        const a = mainnet.hexToU8("e1af205960ae338a37174b407ee71067c3cd7f04d48a5cec7e13f6eccb61dcbc");
        const b = mainnet.hexToU8("a314970cd7c647d1cc0a477e1a2122b98205b6924b73001b8dab20ee81c2f4f7");
        const ab_u8 = mainnet.hexToU8("a4a2774e14677eaf13a5e8d5f793618ee3b9763ebbd99ac20894b2cea5aa17b7");
        const hashPairResult = yield mainnet.hashPair(a, b);
        chai_1.assert.deepEqual(ab_u8, hashPairResult);
    }));
    it("hashPair returns sha256(sha256(ab)) from Uint8", () => __awaiter(void 0, void 0, void 0, function* () {
        const a = mainnet.base64toU8("4a8gWWCuM4o3F0tAfucQZ8PNfwTUilzsfhP27Mth3Lw="); // A
        const b = mainnet.base64toU8("oxSXDNfGR9HMCkd+GiEiuYIFtpJLcwAbjasg7oHC9Pc="); // B
        const ab = mainnet.base64toU8("pKJ3ThRnfq8TpejV95NhjuO5dj672ZrCCJSyzqWqF7c="); // AB
        const abResult = yield mainnet.hashPair(a, b);
        chai_1.assert.deepEqual(ab, abResult);
        chai_1.assert.deepEqual(mainnet.hexToU8("e1af205960ae338a37174b407ee71067c3cd7f04d48a5cec7e13f6eccb61dcbc"), a);
    }));
    it("hashPair returns calculates merkle root", () => __awaiter(void 0, void 0, void 0, function* () {
        const ab = mainnet.base64toU8("pKJ3ThRnfq8TpejV95NhjuO5dj672ZrCCJSyzqWqF7c="); // AB
        const c = mainnet.base64toU8("sI653OBFKhsZcMTSnoi97gdmmipdGwhYbX/6F7Lj9rU="); // C
        const d = mainnet.base64toU8("lYuelK6ppIW6SUxQ+zGSVYBX98rtlwXUsRNp8HHxBkI="); // D
        const efgh = mainnet.base64toU8("i+FfwqsR7z4HlWjUOysJ7VpWkPsT7LEDL3qrmSOKGEc="); // EFGH
        const ij = mainnet.base64toU8("6CczGx/nomifvCPRTNITF8aZWWy8oiIYKkiTIuzh+nQ="); // IJ
        const abcdefghij = mainnet.base64toU8("sVLspDZIUPNCTHrCszfWBsXKCj+W8VVPjbM9L28TC74="); // Merkle Root
        const abcdefghij_result = yield mainnet.hashPair(yield mainnet.hashPair(yield mainnet.hashPair(ab, yield mainnet.hashPair(c, yield mainnet.hashPair(d, ""))), efgh), ij);
        chai_1.assert.deepEqual(abcdefghij, abcdefghij_result);
    }));
    it("build merkle root from provided proof", () => __awaiter(void 0, void 0, void 0, function* () {
        // "f4d9e94ca7e03f6b114d1e699b4ff9f331c0b251b0e9f26a5b96aff33ee0ce1c";
        // const hash = "4a8gWWCuM4o3F0tAfucQZ8PNfwTUilzsfhP27Mth3Lw="; // A
        // const hash = "oxSXDNfGR9HMCkd+GiEiuYIFtpJLcwAbjasg7oHC9Pc="; // B
        // const hash = "sI653OBFKhsZcMTSnoi97gdmmipdGwhYbX/6F7Lj9rU="; // C
        const hash = "lYuelK6ppIW6SUxQ+zGSVYBX98rtlwXUsRNp8HHxBkI="; // D
        // const hash = "2Xohz0b9WvsL+epCN7xL9chOi0fTjR7uK761wPihxiU="; // G
        // const hash = "kOAzGd3J1I2jirObLzfApa9a/HNvb/Kp2LhlPg/rMI0="; // I
        // const hash = "hCUYQqTA8OGI4cK/ZD7DehQC3YaiWpq1AEYzRn0W4xM="; // J
        const localMerkleRoot = "sVLspDZIUPNCTHrCszfWBsXKCj+W8VVPjbM9L28TC74=";
        const proofIsValid = yield mainnet.verifyTransaction({ txnHash: hash, merkleRoot: localMerkleRoot });
        chai_1.assert.isTrue(proofIsValid, "the root of the calculated merkle tree should match merkle root provided");
    }));
    it("getTransaction returns the transaction", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const txHex = "11556da6ee3cb1d14727b3a8f4b37093b6fecd2bc7d577a02b4e98b7be58a7e8";
        const res = yield mainnet.getTransaction({ hashHex: txHex }, null);
        chai_1.assert.equal((_a = res.getTransaction()) === null || _a === void 0 ? void 0 : _a.getSize(), 441);
        chai_1.assert.equal((_b = res.getTransaction()) === null || _b === void 0 ? void 0 : _b.getVersion(), 2);
        chai_1.assert.equal((_c = res.getTransaction()) === null || _c === void 0 ? void 0 : _c.getLockTime(), 0);
        const inputs = (_d = res.getTransaction()) === null || _d === void 0 ? void 0 : _d.getInputsList();
        chai_1.assert.equal(inputs[0].getAddress(), "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz", "check the first input address");
        chai_1.assert.equal(inputs[0].getValue(), 546, "check value");
        chai_1.assert.equal(inputs[1].getAddress(), "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz", "check the second input address");
        chai_1.assert.equal(inputs[1].getValue(), 8089, "check value");
        const outputs = (_e = res.getTransaction()) === null || _e === void 0 ? void 0 : _e.getOutputsList();
        chai_1.assert.equal(outputs[0].getScriptClass(), "datacarrier", "check the script class");
        chai_1.assert.equal(outputs[0].getDisassembledScript(), "OP_RETURN 534c5000 41 47454e45534953 4e465431204368696c64 4d79204e465431204368696c64   00  0000000000000001", "jSLPAGENESISNFT1 ChildMy NFT1 ChildLLL");
        chai_1.assert.equal(outputs[1].getAddress(), "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz", "check the second output address");
        chai_1.assert.equal(outputs[2].getAddress(), "qrhvcy5xlegs858fjqf8ssl6a4f7wpstaqlsy4gusz", "check the third output address");
    }));
    it("getAddressTransactions for an address", () => __awaiter(void 0, void 0, void 0, function* () {
        const exampleAddress = "bitcoincash:qregyd3kcklc58fd6r8epfwulpvd9f4mr5gxg8n8y7";
        const firstTxid = "5248906d6ac8425f287727797307d7305291f57d30406cb627e6573bbb77a344";
        const res = yield mainnet.getAddressTransactions({ address: exampleAddress, height: 0 }, null);
        const txns = res.getConfirmedTransactionsList();
        chai_1.assert.equal(txns.length >= 3, true);
        const tx1 = txns.filter((t) => buffer_1.Buffer.from(t.getHash_asU8().reverse()).toString("hex") === firstTxid)[0];
        chai_1.assert.equal(buffer_1.Buffer.from(tx1.getHash()).toString("hex"), firstTxid);
        // check input values
        chai_1.assert.equal(tx1.getInputsList()[0].getAddress(), "qpesnqmhls2c8gz2fyqpczx4xy0weu6765p2sp2zfc");
        chai_1.assert.equal(tx1.getInputsList()[0].getValue(), 0.00013961 * Math.pow(10, 8));
        chai_1.assert.equal(tx1.getInputsList()[1].getAddress(), "qr0e8sue6xynzucysjjjq6ms5vpj0zpgnyqhalegx4");
        chai_1.assert.equal(tx1.getInputsList()[2].getAddress(), "qq3af8yet2vrdl562mt499f28pm3f3x0t5s5ekgv20");
        // check output value
        chai_1.assert.equal(tx1.getOutputsList()[0].getValue(), 0.00035283 * Math.pow(10, 8));
        chai_1.assert.equal(tx1.getOutputsList()[0].getAddress(), "qregyd3kcklc58fd6r8epfwulpvd9f4mr5gxg8n8y7");
    }));
    it("getAddressUtxos should get UTXOs", () => __awaiter(void 0, void 0, void 0, function* () {
        const eaterAddress = "bitcoincash:qp6e6enhpy0fwwu7nkvlr8rgl06ru0c9lywalz8st5"; // 1BitcoinEaterAddressDontSendf59kuE
        const confirmedRes = yield mainnet.getAddressUtxos({ address: eaterAddress, includeMempool: false }, null);
        const confirmedTxns = yield confirmedRes.getOutputsList();
        const unconfirmedRes = yield mainnet.getAddressUtxos({ address: eaterAddress, includeMempool: true }, null);
        const unconfirmedTxns = yield unconfirmedRes.getOutputsList();
        const confirmedValueArray = yield Promise.all(confirmedTxns.map((x) => __awaiter(void 0, void 0, void 0, function* () { return x.getValue(); })));
        const confirmedValue = confirmedValueArray.reduce((a, b) => a + b, 0);
        const unconfirmedValueArray = yield Promise.all(unconfirmedTxns.map((x) => __awaiter(void 0, void 0, void 0, function* () { return x.getValue(); })));
        const unconfirmedValue = unconfirmedValueArray.reduce((a, b) => a + b, 0) - confirmedValue;
        chai_1.assert.isAtLeast(confirmedValue, 1313538732, "Value is greater than 1313538732");
        chai_1.assert.equal(unconfirmedValue, 0, "Assume there are no unconfirmed transactions");
    }));
    it("submitTransaction should broadcast", () => __awaiter(void 0, void 0, void 0, function* () {
        const txnHex = "010000000552df9fd3f9bf1f13993e8b7e5b42530394ed644f0df4c0fdd32cf531acc75505030000006a47304402201039b25fa81feb74d8dd0eb25ae065e8baf3c944d7728f77fb68fa0c9b67d2c2022013f0bc158946826791c58dcd5187da1b2dfb3dd36227880e6d3830fe91327ea7c1210383c67be45a2bef59274c29341dd55592973d0b0f14c7810a353fbdff62f613defeffffff34e29914bd556e3a3818342ceff2ae526ef96bf3c3d09777df9f655be52931cf100300006a473044022034070971b4a27f279560a2f8b735ee3324d0dea54999bc24f851a7c6d500a1a102200b09402cf061a15f8ec88f606d8a864f9cc0e86c50ea78c9ce282337bdce19af4121020414832a8304904eec02ae00997ece267f234908d06633d75a8a4e1e4350e172ffffffff34e29914bd556e3a3818342ceff2ae526ef96bf3c3d09777df9f655be52931cf0f0300006a473044022071c84830f0da6abf35f93abebf2a8f3415cbeb3e9d967321a6944bbb6b6ec6aa022006bbfd5019fbc3d516dea6dde5f1d78c4e5428e6f305f00964efde70490ed2374121020414832a8304904eec02ae00997ece267f234908d06633d75a8a4e1e4350e172ffffffff34e29914bd556e3a3818342ceff2ae526ef96bf3c3d09777df9f655be52931cf0e0300006b483045022100ba0e0e300047c23f0e1bf5b83c240f8ad8da99c8021177b75329e30432953855022024d7ddffe1b8ad31d6f0a7955d7ae4d915ab40b31c367f9ed6e0400bc9ba69a94121020414832a8304904eec02ae00997ece267f234908d06633d75a8a4e1e4350e172ffffffff34e29914bd556e3a3818342ceff2ae526ef96bf3c3d09777df9f655be52931cf0d0300006b4830450221009d35b7f99e55486d4d5ee7208dc4c34c157e68f55a4fc7b7765c86b8d9af296f022058d754701593829d0ed4a5ea8881737ae185c7ead271b748e4eb76b92386261d4121020414832a8304904eec02ae00997ece267f234908d06633d75a8a4e1e4350e172ffffffff040000000000000000496a04534c500001010453454e4420c4b0d62156b3fa5c8f3436079b5394f7edc1bef5dc1cd2f9d0c4d46f82cca47908000000000000000108000000000000000408000000000000005a22020000000000001976a914d20919767967b6305778ef2c8680e1bab9f9070588ac22020000000000001976a914750689c893d2b2a0e805b8b356283126d7d1e5c088ac22020000000000001976a9149af63d01b056c5b3e0a1d6f74e46ba0543a579bd88ac00000000";
        try {
            yield mainnet.submitTransaction({ txnHex }, null);
        }
        catch (err) {
            chai_1.assert.equal(err.message, "tx rejected: transaction already exists");
        }
    }));
});
//# sourceMappingURL=index.spec.js.map