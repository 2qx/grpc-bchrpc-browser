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

* [getAddressTransactions](grpc_bchrpc_browser.grpcclient.md#getaddresstransactions)
* [getAddressUtxos](grpc_bchrpc_browser.grpcclient.md#getaddressutxos)
* [getBlock](grpc_bchrpc_browser.grpcclient.md#getblock)
* [getBlockFilter](grpc_bchrpc_browser.grpcclient.md#getblockfilter)
* [getBlockInfo](grpc_bchrpc_browser.grpcclient.md#getblockinfo)
* [getBlockchainInfo](grpc_bchrpc_browser.grpcclient.md#getblockchaininfo)
* [getHeaders](grpc_bchrpc_browser.grpcclient.md#getheaders)
* [getMempool](grpc_bchrpc_browser.grpcclient.md#getmempool)
* [getMempoolInfo](grpc_bchrpc_browser.grpcclient.md#getmempoolinfo)
* [getMerkleProof](grpc_bchrpc_browser.grpcclient.md#getmerkleproof)
* [getRawBlock](grpc_bchrpc_browser.grpcclient.md#getrawblock)
* [getRawTransaction](grpc_bchrpc_browser.grpcclient.md#getrawtransaction)
* [getTransaction](grpc_bchrpc_browser.grpcclient.md#gettransaction)
* [getUnspentOutput](grpc_bchrpc_browser.grpcclient.md#getunspentoutput)
* [submitTransaction](grpc_bchrpc_browser.grpcclient.md#submittransaction)
* [subscribeBlocks](grpc_bchrpc_browser.grpcclient.md#subscribeblocks)
* [subscribeTransactions](grpc_bchrpc_browser.grpcclient.md#subscribetransactions)

## Constructors

###  constructor

\+ **new GrpcClient**(`__namedParameters`: object): *[GrpcClient](grpc_bchrpc_browser.grpcclient.md)*

*Defined in [client.ts:8](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L8)*

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

*Defined in [client.ts:8](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L8)*

## Methods

###  getAddressTransactions

▸ **getAddressTransactions**(`__namedParameters`: object): *Promise‹GetAddressTransactionsResponse›*

*Defined in [client.ts:158](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L158)*

Get transactions related to a particular address

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`address` | string | Bitcoin cash address in casharr format. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, will be overridden by `hash`, if provided.  |
`height` | undefined &#124; number | Filter to only return transactions after this block number. |
`nbFetch` | undefined &#124; number | Number of transactions return. |
`nbSkip` | undefined &#124; number | Number of transactions to skip, in chronological order. |

**Returns:** *Promise‹GetAddressTransactionsResponse›*

___

###  getAddressUtxos

▸ **getAddressUtxos**(`__namedParameters`: object): *Promise‹GetAddressUnspentOutputsResponse›*

*Defined in [client.ts:236](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L236)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`address` | string |
`includeMempool` | boolean |

**Returns:** *Promise‹GetAddressUnspentOutputsResponse›*

___

###  getBlock

▸ **getBlock**(`__namedParameters`: object): *Promise‹GetBlockResponse›*

*Defined in [client.ts:284](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L284)*

Retrieve block info given a block number or hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fullTransactions` | undefined &#124; false &#124; true | a flag to return full transaction data, by defult `false` only transaction hashes are returned.  |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided. |
`index` | undefined &#124; number | the block number to be retrieved. |

**Returns:** *Promise‹GetBlockResponse›*

___

###  getBlockFilter

▸ **getBlockFilter**(`__namedParameters`: object): *Promise‹GetBlockFilterResponse›*

*Defined in [client.ts:315](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L315)*

Retrieve block filter given a block number or hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, expressed in little-endian in either a base64 encoded string or byte array. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.  |
`height` | undefined &#124; number | the block number index to be retrieved. |

**Returns:** *Promise‹GetBlockFilterResponse›*

___

###  getBlockInfo

▸ **getBlockInfo**(`__namedParameters`: object): *Promise‹GetBlockInfoResponse›*

*Defined in [client.ts:338](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L338)*

Retrieve block info given a block number or hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, expressed in little-endian in either a base64 encoded string or byte array. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden a hash if provided.  |
`height` | undefined &#124; number | the block number index to be retrieved. |

**Returns:** *Promise‹GetBlockInfoResponse›*

___

###  getBlockchainInfo

▸ **getBlockchainInfo**(): *Promise‹GetBlockchainInfoResponse›*

*Defined in [client.ts:358](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L358)*

Retrieve block info for the network, network state and host node.

**Returns:** *Promise‹GetBlockchainInfoResponse›*

___

###  getHeaders

▸ **getHeaders**(`__namedParameters`: object): *Promise‹GetHeadersResponse›*

*Defined in [client.ts:129](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L129)*

Get block header information

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`blockLocatorHashes` | undefined &#124; string &#124; Uint8Array‹›[] | Sparse list of hashes known to the client. |
`stopHash` | undefined &#124; string | -Last block hash to return.  |

**Returns:** *Promise‹GetHeadersResponse›*

___

###  getMempool

▸ **getMempool**(`__namedParameters`: object): *Promise‹GetMempoolResponse›*

*Defined in [client.ts:56](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L56)*

Get transactions from mempool

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`fullTransactions` | undefined &#124; false &#124; true | A flag to return full transaction data. Default is `false`, only transaction hashes are returned.  |

**Returns:** *Promise‹GetMempoolResponse›*

___

###  getMempoolInfo

▸ **getMempoolInfo**(): *Promise‹GetMempoolInfoResponse›*

*Defined in [client.ts:38](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L38)*

Get information about transactions in mempool

**Returns:** *Promise‹GetMempoolInfoResponse›*

___

###  getMerkleProof

▸ **getMerkleProof**(`__namedParameters`: object): *Promise‹GetMerkleProofResponse›*

*Defined in [client.ts:217](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L217)*

Retrieve merkle (SPV) proof that the given transaction is in the provided block.

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the tx hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the tx hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.  |

**Returns:** *Promise‹GetMerkleProofResponse›*

___

###  getRawBlock

▸ **getRawBlock**(`__namedParameters`: object): *Promise‹GetRawBlockResponse›*

*Defined in [client.ts:257](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L257)*

Retrieve raw block from a hash

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a 'base64' encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian 'hex' encoded string, will be overridden by hash if also provided.  |

**Returns:** *Promise‹GetRawBlockResponse›*

___

###  getRawTransaction

▸ **getRawTransaction**(`__namedParameters`: object): *Promise‹GetRawTransactionResponse›*

*Defined in [client.ts:79](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L79)*

Get a raw transaction

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, in either a base64 encoded string or byte array, little-endian. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, sill be overridden by hash if provided.  |

**Returns:** *Promise‹GetRawTransactionResponse›*

___

###  getTransaction

▸ **getTransaction**(`__namedParameters`: object): *Promise‹GetTransactionResponse›*

*Defined in [client.ts:104](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L104)*

Get a transaction

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› | the hash, expressed in little-endian in either a base64 encoded string or byte array. |
`hashHex` | undefined &#124; string | the hash as a big-endian hexadecimal encoded string, will be overridden by hash, if provided.  |

**Returns:** *Promise‹GetTransactionResponse›*

___

###  getUnspentOutput

▸ **getUnspentOutput**(`__namedParameters`: object): *Promise‹GetUnspentOutputResponse›*

*Defined in [client.ts:188](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L188)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`hash` | undefined &#124; string &#124; Uint8Array‹› |
`hashHex` | undefined &#124; string |
`includeMempool` | undefined &#124; false &#124; true |
`vout` | number |

**Returns:** *Promise‹GetUnspentOutputResponse›*

___

###  submitTransaction

▸ **submitTransaction**(`__namedParameters`: object): *Promise‹SubmitTransactionResponse›*

*Defined in [client.ts:431](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L431)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`txn` | undefined &#124; Uint8Array‹› |
`txnHex` | undefined &#124; string |

**Returns:** *Promise‹SubmitTransactionResponse›*

___

###  subscribeBlocks

▸ **subscribeBlocks**(`__namedParameters`: object): *Promise‹ClientReadableStream‹BlockNotification››*

*Defined in [client.ts:415](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L415)*

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

*Defined in [client.ts:378](https://github.com/2qx/grpc-bchrpc-browser/blob/472c44d/src/client.ts#L378)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Description |
------ | ------ | ------ |
`includeBlockAcceptance` | undefined &#124; false &#124; true | If true, transactions are included when they are confirmed. This notification is sent in addition to any requested mempool notifications. |
`includeMempoolAcceptance` | undefined &#124; false &#124; true | If true, new unconfirmed transactions from mempool are included apart from the ones confirmed in a block. |
`includeSerializedTxn` | undefined &#124; false &#124; true | If true, transactions are serialized using bitcoin protocol encoding. Default is false, transaction will be Marshaled. |
`transactionFilter` | undefined &#124; TransactionFilter‹› | - |
`unsubscribe` | undefined &#124; false &#124; true | NOT IMPLEMENTED, see ClientReadableStream.cancel()  |

**Returns:** *Promise‹ClientReadableStream‹TransactionNotification››*
