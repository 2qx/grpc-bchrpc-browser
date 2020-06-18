[grpc-bchrpc-browser](../README.md) › [Globals](../globals.md) › [grpc-bchrpc-browser](../modules/grpc_bchrpc_browser.md) › [GrpcClient](grpc_bchrpc_browser.grpcclient.md)

# Class: GrpcClient

## Hierarchy

* **GrpcClient**

## Index

### Constructors

* [constructor](grpc_bchrpc_browser.grpcclient.md#constructor)

### Properties

* [client](grpc_bchrpc_browser.grpcclient.md#client)

### Methods

* [_numberTo4ByteLEArray](grpc_bchrpc_browser.grpcclient.md#private-_numberto4bytelearray)
* [base64toU8](grpc_bchrpc_browser.grpcclient.md#base64tou8)
* [compareUint8Array](grpc_bchrpc_browser.grpcclient.md#compareuint8array)
* [expandMerkleFlags](grpc_bchrpc_browser.grpcclient.md#expandmerkleflags)
* [getAddressTransactions](grpc_bchrpc_browser.grpcclient.md#getaddresstransactions)
* [getAddressUtxos](grpc_bchrpc_browser.grpcclient.md#getaddressutxos)
* [getBlock](grpc_bchrpc_browser.grpcclient.md#getblock)
* [getBlockInfo](grpc_bchrpc_browser.grpcclient.md#getblockinfo)
* [getBlockchainInfo](grpc_bchrpc_browser.grpcclient.md#getblockchaininfo)
* [getHeaders](grpc_bchrpc_browser.grpcclient.md#getheaders)
* [getMempool](grpc_bchrpc_browser.grpcclient.md#getmempool)
* [getMempoolInfo](grpc_bchrpc_browser.grpcclient.md#getmempoolinfo)
* [getMerkleProof](grpc_bchrpc_browser.grpcclient.md#getmerkleproof)
* [getMerkleRootFromProof](grpc_bchrpc_browser.grpcclient.md#getmerklerootfromproof)
* [getRawBlock](grpc_bchrpc_browser.grpcclient.md#getrawblock)
* [getRawTransaction](grpc_bchrpc_browser.grpcclient.md#getrawtransaction)
* [getTransaction](grpc_bchrpc_browser.grpcclient.md#gettransaction)
* [getUnspentOutput](grpc_bchrpc_browser.grpcclient.md#getunspentoutput)
* [hash](grpc_bchrpc_browser.grpcclient.md#hash)
* [hashPair](grpc_bchrpc_browser.grpcclient.md#hashpair)
* [hexToBase64](grpc_bchrpc_browser.grpcclient.md#hextobase64)
* [hexToU8](grpc_bchrpc_browser.grpcclient.md#hextou8)
* [sha256sha256](grpc_bchrpc_browser.grpcclient.md#sha256sha256)
* [submitTransaction](grpc_bchrpc_browser.grpcclient.md#submittransaction)
* [subscribeBlocks](grpc_bchrpc_browser.grpcclient.md#subscribeblocks)
* [subscribeTransactions](grpc_bchrpc_browser.grpcclient.md#subscribetransactions)
* [verifyBlock](grpc_bchrpc_browser.grpcclient.md#verifyblock)
* [verifyTransaction](grpc_bchrpc_browser.grpcclient.md#verifytransaction)

## Constructors

###  constructor

\+ **new GrpcClient**(`__namedParameters`: object): *[GrpcClient](grpc_bchrpc_browser.grpcclient.md)*

*Defined in [client.ts:8](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L8)*

Create a client.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`options` | null &#124; object | - | grpc client options.  |
`testnet` | boolean | false | Whether testnet is being used, default:false. |
`url` | undefined &#124; string | - | The bchd server expressed as host:port. |

**Returns:** *[GrpcClient](grpc_bchrpc_browser.grpcclient.md)*

## Properties

###  client

• **client**: *bchrpcClient*

*Defined in [client.ts:8](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L8)*

## Methods

### `Private` _numberTo4ByteLEArray

▸ **_numberTo4ByteLEArray**(`num`: number): *number[]*

*Defined in [client.ts:564](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L564)*

**Parameters:**

Name | Type |
------ | ------ |
`num` | number |

**Returns:** *number[]*

___

###  base64toU8

▸ **base64toU8**(`b64`: string): *Uint8Array‹›*

*Defined in [client.ts:588](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L588)*

**Parameters:**

Name | Type |
------ | ------ |
`b64` | string |

**Returns:** *Uint8Array‹›*

___

###  compareUint8Array

▸ **compareUint8Array**(`a`: string | Uint8Array, `b`: string | Uint8Array): *boolean*

*Defined in [client.ts:526](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L526)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string &#124; Uint8Array |
`b` | string &#124; Uint8Array |

**Returns:** *boolean*

___

###  expandMerkleFlags

▸ **expandMerkleFlags**(`b`: Uint8Array): *number[]*

*Defined in [client.ts:515](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L515)*

**Parameters:**

Name | Type |
------ | ------ |
`b` | Uint8Array |

**Returns:** *number[]*

___

###  getAddressTransactions

▸ **getAddressTransactions**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetAddressTransactionsResponse›*

*Defined in [client.ts:167](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L167)*

Get transactions related to a particular address

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Bitcoin cash address in casharr format. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, will be overridden by `hash`, if provided. |
`height` | undefined &#124; number | Filter to only return transactions after this block number. |
`nbFetch` | undefined &#124; number | Number of transactions return. |
`nbSkip` | undefined &#124; number | Number of transactions to skip, in chronological order. |

▪ **metadata**: *Metadata | null*

Optional parameters for grpcWeb client

**Returns:** *Promise‹GetAddressTransactionsResponse›*

___

###  getAddressUtxos

▸ **getAddressUtxos**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetAddressUnspentOutputsResponse›*

*Defined in [client.ts:250](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L250)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`address` | string |
`includeMempool` | boolean |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetAddressUnspentOutputsResponse›*

___

###  getBlock

▸ **getBlock**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetBlockResponse›*

*Defined in [client.ts:304](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L304)*

getBlock

Retrieve block info given a block number or hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fullTransactions` | undefined &#124; false &#124; true | a flag to return full transaction data, by defult `false` only transaction hashes are returned.  |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided. |
`index` | undefined &#124; number | the block number to be retrieved. |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetBlockResponse›*

___

###  getBlockInfo

▸ **getBlockInfo**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetBlockInfoResponse›*

*Defined in [client.ts:337](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L337)*

getBlockInfo

Retrieve block info given a block number or hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, expressed in little-endian in either a base64 encoded string or byte array. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.  |
`height` | undefined &#124; number | the block number index to be retrieved. |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetBlockInfoResponse›*

___

###  getBlockchainInfo

▸ **getBlockchainInfo**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetBlockchainInfoResponse›*

*Defined in [client.ts:362](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L362)*

getBlockchainInfo

Retrieve block info for the network, network state and host node.

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |
`metadata` | Metadata &#124; null |

**Returns:** *Promise‹GetBlockchainInfoResponse›*

___

###  getHeaders

▸ **getHeaders**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetHeadersResponse›*

*Defined in [client.ts:136](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L136)*

Get block header information

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`blockLocatorHashes` | undefined &#124; string &#124; Uint8Array‹›[] | Sparse list of hashes known to the client. |
`stopHash` | undefined &#124; string | -Last block hash to return.  |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetHeadersResponse›*

___

###  getMempool

▸ **getMempool**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetMempoolResponse›*

*Defined in [client.ts:58](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L58)*

Get transactions from mempool

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fullTransactions` | undefined &#124; false &#124; true | A flag to return full transaction data. Default is `false`, only transaction hashes are returned. |

▪ **metadata**: *Metadata | null*

Optional parameters for grpcWeb client

**Returns:** *Promise‹GetMempoolResponse›*

___

###  getMempoolInfo

▸ **getMempoolInfo**(`metadata`: Metadata | null): *Promise‹GetMempoolInfoResponse›*

*Defined in [client.ts:39](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L39)*

Get information about transactions in mempool

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`metadata` | Metadata &#124; null | optional parameters for grpcWeb client  |

**Returns:** *Promise‹GetMempoolInfoResponse›*

___

###  getMerkleProof

▸ **getMerkleProof**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetMerkleProofResponse›*

*Defined in [client.ts:230](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L230)*

getMerkleProof

Retrieve merkle (SPV) proof that the given transaction is in the provided block.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the tx hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the tx hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.  |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetMerkleProofResponse›*

___

###  getMerkleRootFromProof

▸ **getMerkleRootFromProof**(`proof`: string | Uint8Array‹›[], `flags`: number[], `fn`: any): *Promise‹any›*

*Defined in [client.ts:536](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L536)*

**Parameters:**

Name | Type |
------ | ------ |
`proof` | string &#124; Uint8Array‹›[] |
`flags` | number[] |
`fn` | any |

**Returns:** *Promise‹any›*

___

###  getRawBlock

▸ **getRawBlock**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetRawBlockResponse›*

*Defined in [client.ts:274](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L274)*

getRawBlock

Retrieve raw block from a hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.  |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetRawBlockResponse›*

___

###  getRawTransaction

▸ **getRawTransaction**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetRawTransactionResponse›*

*Defined in [client.ts:83](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L83)*

Get a raw transaction

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a base64 encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, sill be overridden by hash if provided. |

▪ **metadata**: *Metadata | null*

Optional parameters for grpcWeb client

**Returns:** *Promise‹GetRawTransactionResponse›*

___

###  getTransaction

▸ **getTransaction**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetTransactionResponse›*

*Defined in [client.ts:110](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L110)*

Get a transaction

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, expressed in little-endian in either a base64 encoded string or byte array. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, will be overridden by hash, if provided. |

▪ **metadata**: *Metadata | null*

Optional parameters for grpcWeb client

**Returns:** *Promise‹GetTransactionResponse›*

___

###  getUnspentOutput

▸ **getUnspentOutput**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹GetUnspentOutputResponse›*

*Defined in [client.ts:198](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L198)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› |
`hashHex` | undefined &#124; string |
`includeMempool` | undefined &#124; false &#124; true |
`vout` | number |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹GetUnspentOutputResponse›*

___

###  hash

▸ **hash**(`a`: string | Uint8Array): *Promise‹Uint8Array‹››*

*Defined in [client.ts:486](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L486)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string &#124; Uint8Array |

**Returns:** *Promise‹Uint8Array‹››*

___

###  hashPair

▸ **hashPair**(`a`: string | Uint8Array, `b`: string | Uint8Array): *Promise‹string | Uint8Array‹››*

*Defined in [client.ts:497](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L497)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string &#124; Uint8Array |
`b` | string &#124; Uint8Array |

**Returns:** *Promise‹string | Uint8Array‹››*

___

###  hexToBase64

▸ **hexToBase64**(`hashHex`: string): *string*

*Defined in [client.ts:580](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L580)*

**Parameters:**

Name | Type |
------ | ------ |
`hashHex` | string |

**Returns:** *string*

___

###  hexToU8

▸ **hexToU8**(`hashHex`: string): *Uint8Array‹›*

*Defined in [client.ts:576](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L576)*

**Parameters:**

Name | Type |
------ | ------ |
`hashHex` | string |

**Returns:** *Uint8Array‹›*

___

###  sha256sha256

▸ **sha256sha256**(`ab`: Uint8Array): *Promise‹ArrayBuffer›*

*Defined in [client.ts:478](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L478)*

**Parameters:**

Name | Type |
------ | ------ |
`ab` | Uint8Array |

**Returns:** *Promise‹ArrayBuffer›*

___

###  submitTransaction

▸ **submitTransaction**(`__namedParameters`: object, `metadata`: Metadata | null): *Promise‹SubmitTransactionResponse›*

*Defined in [client.ts:414](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L414)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`txn` | undefined &#124; Uint8Array‹› |
`txnHex` | undefined &#124; string |

▪ **metadata**: *Metadata | null*

**Returns:** *Promise‹SubmitTransactionResponse›*

___

###  subscribeBlocks

▸ **subscribeBlocks**(`__namedParameters`: object): *Promise‹ClientReadableStream‹BlockNotification››*

*Defined in [client.ts:398](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L398)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`includeSerializedBlock` | undefined &#124; false &#124; true |
`includeTxnData` | undefined &#124; false &#124; true |
`includeTxnHashes` | undefined &#124; false &#124; true |

**Returns:** *Promise‹ClientReadableStream‹BlockNotification››*

___

###  subscribeTransactions

▸ **subscribeTransactions**(`__namedParameters`: object): *Promise‹ClientReadableStream‹TransactionNotification››*

*Defined in [client.ts:379](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L379)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`includeBlockAcceptance` | undefined &#124; false &#124; true | If true, transactions are included when they are confirmed. This notification is sent in addition to any requested mempool notifications. |
`includeMempoolAcceptance` | undefined &#124; false &#124; true | If true, new unconfirmed transactions from mempool are included apart from the ones confirmed in a block. |
`includeSerializedTxn` | undefined &#124; false &#124; true | If true, transactions are serialized using bitcoin protocol encoding. Default is false, transaction will be Marshaled.  |

**Returns:** *Promise‹ClientReadableStream‹TransactionNotification››*

___

###  verifyBlock

▸ **verifyBlock**(`__namedParameters`: object): *Promise‹boolean›*

*Defined in [client.ts:435](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L435)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`block` | undefined &#124; BlockInfo‹› |
`hash` | string &#124; Uint8Array‹› |

**Returns:** *Promise‹boolean›*

___

###  verifyTransaction

▸ **verifyTransaction**(`__namedParameters`: object): *Promise‹boolean›*

*Defined in [client.ts:452](https://github.com/2qx/grpc-bchrpc-browser/blob/b259064/src/client.ts#L452)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`merkleRoot` | undefined &#124; string &#124; Uint8Array‹› |
`merkleRootHex` | undefined &#124; string |
`txnHash` | undefined &#124; string &#124; Uint8Array‹› |
`txnHashHex` | undefined &#124; string |

**Returns:** *Promise‹boolean›*
