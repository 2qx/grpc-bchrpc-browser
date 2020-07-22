# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [bchrpc.proto](#bchrpc.proto)
    - [Block](#pb.Block)
    - [Block.TransactionData](#pb.Block.TransactionData)
    - [BlockInfo](#pb.BlockInfo)
    - [BlockNotification](#pb.BlockNotification)
    - [GetAddressTransactionsRequest](#pb.GetAddressTransactionsRequest)
    - [GetAddressTransactionsResponse](#pb.GetAddressTransactionsResponse)
    - [GetAddressUnspentOutputsRequest](#pb.GetAddressUnspentOutputsRequest)
    - [GetAddressUnspentOutputsResponse](#pb.GetAddressUnspentOutputsResponse)
    - [GetBlockFilterRequest](#pb.GetBlockFilterRequest)
    - [GetBlockFilterResponse](#pb.GetBlockFilterResponse)
    - [GetBlockInfoRequest](#pb.GetBlockInfoRequest)
    - [GetBlockInfoResponse](#pb.GetBlockInfoResponse)
    - [GetBlockRequest](#pb.GetBlockRequest)
    - [GetBlockResponse](#pb.GetBlockResponse)
    - [GetBlockchainInfoRequest](#pb.GetBlockchainInfoRequest)
    - [GetBlockchainInfoResponse](#pb.GetBlockchainInfoResponse)
    - [GetHeadersRequest](#pb.GetHeadersRequest)
    - [GetHeadersResponse](#pb.GetHeadersResponse)
    - [GetMempoolInfoRequest](#pb.GetMempoolInfoRequest)
    - [GetMempoolInfoResponse](#pb.GetMempoolInfoResponse)
    - [GetMempoolRequest](#pb.GetMempoolRequest)
    - [GetMempoolResponse](#pb.GetMempoolResponse)
    - [GetMempoolResponse.TransactionData](#pb.GetMempoolResponse.TransactionData)
    - [GetMerkleProofRequest](#pb.GetMerkleProofRequest)
    - [GetMerkleProofResponse](#pb.GetMerkleProofResponse)
    - [GetRawAddressTransactionsRequest](#pb.GetRawAddressTransactionsRequest)
    - [GetRawAddressTransactionsResponse](#pb.GetRawAddressTransactionsResponse)
    - [GetRawBlockRequest](#pb.GetRawBlockRequest)
    - [GetRawBlockResponse](#pb.GetRawBlockResponse)
    - [GetRawTransactionRequest](#pb.GetRawTransactionRequest)
    - [GetRawTransactionResponse](#pb.GetRawTransactionResponse)
    - [GetTransactionRequest](#pb.GetTransactionRequest)
    - [GetTransactionResponse](#pb.GetTransactionResponse)
    - [GetUnspentOutputRequest](#pb.GetUnspentOutputRequest)
    - [GetUnspentOutputResponse](#pb.GetUnspentOutputResponse)
    - [MempoolTransaction](#pb.MempoolTransaction)
    - [SubmitTransactionRequest](#pb.SubmitTransactionRequest)
    - [SubmitTransactionResponse](#pb.SubmitTransactionResponse)
    - [SubscribeBlocksRequest](#pb.SubscribeBlocksRequest)
    - [SubscribeTransactionsRequest](#pb.SubscribeTransactionsRequest)
    - [Transaction](#pb.Transaction)
    - [Transaction.Input](#pb.Transaction.Input)
    - [Transaction.Input.Outpoint](#pb.Transaction.Input.Outpoint)
    - [Transaction.Output](#pb.Transaction.Output)
    - [TransactionFilter](#pb.TransactionFilter)
    - [TransactionNotification](#pb.TransactionNotification)
    - [UnspentOutput](#pb.UnspentOutput)
  
    - [BlockNotification.Type](#pb.BlockNotification.Type)
    - [GetBlockchainInfoResponse.BitcoinNet](#pb.GetBlockchainInfoResponse.BitcoinNet)
    - [TransactionNotification.Type](#pb.TransactionNotification.Type)
  
    - [bchrpc](#pb.bchrpc)
  
- [Scalar Value Types](#scalar-value-types)



<a name="bchrpc.proto"></a>
<p align="right"><a href="#top">Top</a></p>

## bchrpc.proto



<a name="pb.Block"></a>

### Block



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [BlockInfo](#pb.BlockInfo) |  | Block header data, as well as metadata stored by the node. |
| transaction_data | [Block.TransactionData](#pb.Block.TransactionData) | repeated | List of transactions or transaction hashes. |






<a name="pb.Block.TransactionData"></a>

### Block.TransactionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction_hash | [bytes](#bytes) |  | Just the transaction hash. |
| transaction | [Transaction](#pb.Transaction) |  | A marshaled transaction. |






<a name="pb.BlockInfo"></a>

### BlockInfo
Metadata for identifying and validating a block


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The double sha256 hash of the six header fields in the first 80 bytes of the block, when encoded according the bitcoin protocol. sha256(sha256(encoded_header)) |
| height | [int32](#int32) |  | The block number, an incremental index for each block mined. |
| version | [int32](#int32) |  | A version number to track software/protocol upgrades. |
| previous_block | [bytes](#bytes) |  | Hash of the previous block |
| merkle_root | [bytes](#bytes) |  | The root of the Merkle Tree built from all transactions in the block. |
| timestamp | [int64](#int64) |  | When mining of the block started, expressed in seconds since 1970-01-01. |
| bits | [uint32](#uint32) |  | Difficulty in Compressed Target Format. |
| nonce | [uint32](#uint32) |  | A random value that was generated during block mining which happened to result in a computed block hash below the difficulty target at the time. |
| confirmations | [int32](#int32) |  | Number of blocks in a chain, including the block itself upon creation. |
| difficulty | [double](#double) |  | Difficulty target at time of creation. |
| next_block_hash | [bytes](#bytes) |  | Hash of the next block in this chain. |
| size | [int32](#int32) |  | Size of the block in bytes. |
| median_time | [int64](#int64) |  | The median block time of the latest 11 block timestamps. |






<a name="pb.BlockNotification"></a>

### BlockNotification



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [BlockNotification.Type](#pb.BlockNotification.Type) |  | Whether the block is connected to the chain. |
| block_info | [BlockInfo](#pb.BlockInfo) |  | Marshaled block header data, as well as metadata stored by the node. |
| marshaled_block | [Block](#pb.Block) |  | A Block. |
| serialized_block | [bytes](#bytes) |  | Binary block, serialized using bitcoin protocol encoding. |






<a name="pb.GetAddressTransactionsRequest"></a>

### GetAddressTransactionsRequest
Get marshaled transactions related to a specific address.

RECOMMENDED:
Parameters have been provided to query without creating
  performance issues on the node or client.

- The number of transactions to skip and fetch allow for iterating
      over a large set of transactions, if necessary.

- A starting block parameter (either `hash` or `height`)
      may then be used to filter results to those occurring
      after a certain time.

This approach will reduce network traffic and response processing
  for the client, as well as reduce workload on the node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | The address to query transactions, in lowercase cashaddr format. The network prefix is optional (i.e. &#34;cashaddress:&#34;). |
| nb_skip | [uint32](#uint32) |  | The number of confirmed transactions to skip, starting with the oldest first. Does not affect results of unconfirmed transactions. |
| nb_fetch | [uint32](#uint32) |  | Specify the number of transactions to fetch. |
| hash | [bytes](#bytes) |  | Recommended. Only get transactions after (or within) a starting block identified by hash. |
| height | [int32](#int32) |  | Recommended. Only get transactions after (or within) a starting block identified by block number. |






<a name="pb.GetAddressTransactionsResponse"></a>

### GetAddressTransactionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| confirmed_transactions | [Transaction](#pb.Transaction) | repeated | Transactions that have been included in a block. |
| unconfirmed_transactions | [MempoolTransaction](#pb.MempoolTransaction) | repeated | Transactions in mempool which have not been included in a block. |






<a name="pb.GetAddressUnspentOutputsRequest"></a>

### GetAddressUnspentOutputsRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | The address to query transactions, in lowercase cashaddr format. The network identifier is optional (i.e. &#34;cashaddress:&#34;). |
| include_mempool | [bool](#bool) |  | When `include_mempool` is true, unconfirmed transactions from mempool are returned. Default is false. |






<a name="pb.GetAddressUnspentOutputsResponse"></a>

### GetAddressUnspentOutputsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| outputs | [UnspentOutput](#pb.UnspentOutput) | repeated | List of unspent outputs. |






<a name="pb.GetBlockFilterRequest"></a>

### GetBlockFilterRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The block hash as a byte array or base64 encoded string, little-endian. |
| height | [int32](#int32) |  | The block number. |






<a name="pb.GetBlockFilterResponse"></a>

### GetBlockFilterResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| filter | [bytes](#bytes) |  | A compact filter matching input outpoints and public key scripts contained in a block (encoded according to BIP158). |






<a name="pb.GetBlockInfoRequest"></a>

### GetBlockInfoRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The block hash as a byte array or base64 encoded string, little-endian. |
| height | [int32](#int32) |  | The block number. |






<a name="pb.GetBlockInfoResponse"></a>

### GetBlockInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| info | [BlockInfo](#pb.BlockInfo) |  | Marshaled block header data, as well as metadata. |






<a name="pb.GetBlockRequest"></a>

### GetBlockRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The block hash as a byte array or base64 encoded string, little-endian. |
| height | [int32](#int32) |  | The block number. |
| full_transactions | [bool](#bool) |  | When `full_transactions` is true, full transactions are returned instead of just hashes. Default is false. |






<a name="pb.GetBlockResponse"></a>

### GetBlockResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [Block](#pb.Block) |  | A marshaled block. |






<a name="pb.GetBlockchainInfoRequest"></a>

### GetBlockchainInfoRequest







<a name="pb.GetBlockchainInfoResponse"></a>

### GetBlockchainInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| bitcoin_net | [GetBlockchainInfoResponse.BitcoinNet](#pb.GetBlockchainInfoResponse.BitcoinNet) |  | Which network the node is operating on. |
| best_height | [int32](#int32) |  | The current number of blocks on the longest chain. |
| best_block_hash | [bytes](#bytes) |  | The hash of the best (tip) block in the most-work fully-validated chain. |
| difficulty | [double](#double) |  | Threshold for adding new blocks. |
| median_time | [int64](#int64) |  | Median time of the last 11 blocks. |
| tx_index | [bool](#bool) |  | When `tx_index` is true, the node has full transaction index enabled. |
| addr_index | [bool](#bool) |  | When `addr_index` is true, the node has address index enabled and may be used with call related by address. |






<a name="pb.GetHeadersRequest"></a>

### GetHeadersRequest
Request headers using a list of known block hashes.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block_locator_hashes | [bytes](#bytes) | repeated | A list of block hashes known to the client (most recent first) which is exponentially sparser toward the genesis block (0). Common practice is to include all of the last 10 blocks, and then 9 blocks for each order of ten thereafter. |
| stop_hash | [bytes](#bytes) |  | hash of the latest desired block header; only blocks occurring before the stop will be returned. |






<a name="pb.GetHeadersResponse"></a>

### GetHeadersResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| headers | [BlockInfo](#pb.BlockInfo) | repeated | List of block headers. |






<a name="pb.GetMempoolInfoRequest"></a>

### GetMempoolInfoRequest







<a name="pb.GetMempoolInfoResponse"></a>

### GetMempoolInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| size | [uint32](#uint32) |  | The count of transactions in the mempool |
| bytes | [uint32](#uint32) |  | The size in bytes of all transactions in the mempool |






<a name="pb.GetMempoolRequest"></a>

### GetMempoolRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| full_transactions | [bool](#bool) |  | When `full_transactions` is true, full transaction data is provided instead of just transaction hashes. Default is false. |






<a name="pb.GetMempoolResponse"></a>

### GetMempoolResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction_data | [GetMempoolResponse.TransactionData](#pb.GetMempoolResponse.TransactionData) | repeated | List of unconfirmed transactions. |






<a name="pb.GetMempoolResponse.TransactionData"></a>

### GetMempoolResponse.TransactionData



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction_hash | [bytes](#bytes) |  | The transaction hash |
| transaction | [Transaction](#pb.Transaction) |  | The transaction data |






<a name="pb.GetMerkleProofRequest"></a>

### GetMerkleProofRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction_hash | [bytes](#bytes) |  | A transaction hash. |






<a name="pb.GetMerkleProofResponse"></a>

### GetMerkleProofResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [BlockInfo](#pb.BlockInfo) |  | Block header information for the corresponding transaction |
| hashes | [bytes](#bytes) | repeated | A list containing the transaction hash, the adjacent leaf transaction hash and the hashes of the highest nodes in the merkle tree not built with the transaction. Proof hashes are ordered following transaction order, or left to right on the merkle tree |
| flags | [bytes](#bytes) |  | Binary representing the location of the matching transaction in the full merkle tree, starting with the root (`1`) at position/level 0, where `1` corresponds to a left branch and `01` is a right branch. |






<a name="pb.GetRawAddressTransactionsRequest"></a>

### GetRawAddressTransactionsRequest
Get encoded transactions related to a specific address.

RECOMMENDED:
Parameters have been provided to query without creating
  performance issues on the node or client.

- The number of transactions to skip and fetch allow for iterating
      over a large set of transactions, if necessary.

- A starting block parameter (either `hash` or `height`)
      may then be used to filter results to those occurring
      after a certain time.

This approach will reduce network traffic and response processing
  for the client, as well as reduce workload on the node.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| address | [string](#string) |  | The address to query transactions, in lowercase cashaddr format. The network prefix is optional (i.e. &#34;cashaddress:&#34;). |
| nb_skip | [uint32](#uint32) |  | The number of confirmed transactions to skip, starting with the oldest first. Does not affect results of unconfirmed transactions. |
| nb_fetch | [uint32](#uint32) |  | Specify the number of transactions to fetch. |
| hash | [bytes](#bytes) |  | Recommended. Only return transactions after some starting block identified by hash. |
| height | [int32](#int32) |  | Recommended. Only return transactions after some starting block identified by block number. |






<a name="pb.GetRawAddressTransactionsResponse"></a>

### GetRawAddressTransactionsResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| confirmed_transactions | [bytes](#bytes) | repeated | Transactions that have been included in a block. |
| unconfirmed_transactions | [bytes](#bytes) | repeated | Transactions in mempool which have not been included in a block. |






<a name="pb.GetRawBlockRequest"></a>

### GetRawBlockRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The block hash as a byte array or base64 encoded string, little-endian. |
| height | [int32](#int32) |  | The block number. |






<a name="pb.GetRawBlockResponse"></a>

### GetRawBlockResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| block | [bytes](#bytes) |  | Raw block data (with header) serialized according the the bitcoin block protocol. |






<a name="pb.GetRawTransactionRequest"></a>

### GetRawTransactionRequest
Get an encoded transaction from a transaction hash.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | A transaction hash. |






<a name="pb.GetRawTransactionResponse"></a>

### GetRawTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction | [bytes](#bytes) |  | Raw transaction in bytes. |






<a name="pb.GetTransactionRequest"></a>

### GetTransactionRequest
Get a transaction from a transaction hash.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | A transaction hash. |






<a name="pb.GetTransactionResponse"></a>

### GetTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction | [Transaction](#pb.Transaction) |  | A marshaled transaction. |






<a name="pb.GetUnspentOutputRequest"></a>

### GetUnspentOutputRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the transaction. |
| index | [uint32](#uint32) |  | The number of the output, starting from zero. |
| include_mempool | [bool](#bool) |  | When include_mempool is true, unconfirmed transactions from mempool are returned. Default is false. |






<a name="pb.GetUnspentOutputResponse"></a>

### GetUnspentOutputResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| outpoint | [Transaction.Input.Outpoint](#pb.Transaction.Input.Outpoint) |  | A reference to the related input. |
| pubkey_script | [bytes](#bytes) |  | Locking script dictating how funds can be spent in the future |
| value | [int64](#int64) |  | Amount in satoshi. |
| is_coinbase | [bool](#bool) |  | When is_coinbase is true, the transaction was the first in a block, created by a miner, and used to pay the block reward |
| block_height | [int32](#int32) |  | The index number of the block containing the transaction creating the output. |






<a name="pb.MempoolTransaction"></a>

### MempoolTransaction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction | [Transaction](#pb.Transaction) |  |  |
| added_time | [int64](#int64) |  | The time when the transaction was added too the pool. |
| added_height | [int32](#int32) |  | The block height when the transaction was added to the pool. |
| fee | [int64](#int64) |  | The total fee in satoshi the transaction pays. |
| fee_per_kb | [int64](#int64) |  | The fee in satoshi per kilobyte the transaction pays. |
| starting_priority | [double](#double) |  | The priority of the transaction when it was added to the pool. |






<a name="pb.SubmitTransactionRequest"></a>

### SubmitTransactionRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| transaction | [bytes](#bytes) |  | The encoded transaction. |






<a name="pb.SubmitTransactionResponse"></a>

### SubmitTransactionResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  |  |






<a name="pb.SubscribeBlocksRequest"></a>

### SubscribeBlocksRequest
Options to define data structure to be sent by SubscribeBlock stream:

 - BlockInfo (block metadata): `BlockInfo`
     - SubscribeBlocksRequest {}

 - Marshaled Block (with transaction hashes): `Block`
     - SubscribeBlocksRequest {
           full_block = true
       }
 - Marshaled Block (with full transaction data): `Block`
     - SubscribeBlocksRequest {
           full_block = true
           full_transactions = true
       }
 - Serialized Block acccording to bitcoin protocol encoding: `bytes`
     - SubscribeBlocksRequest {
           serialize_block = true
       }


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| full_block | [bool](#bool) |  | When full_block is true, a complete marshaled block is sent. See `Block`. Default is false, block metadata is sent. See `BlockInfo`. |
| full_transactions | [bool](#bool) |  | When full_transactions is true, provide full transaction info for a marshaled block. Default is false, only the transaction hashes are included for a marshaled block. See `TransactionData`. |
| serialize_block | [bool](#bool) |  | When serialize_block is true, blocks are serialized using bitcoin protocol encoding. Default is false, block will be Marshaled (see `BlockInfo` and `BlockNotification`) |






<a name="pb.SubscribeTransactionsRequest"></a>

### SubscribeTransactionsRequest
Request to subscribe or unsubscribe from a stream of transactions.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| subscribe | [TransactionFilter](#pb.TransactionFilter) |  | Subscribe to a filter. add items to a filter |
| unsubscribe | [TransactionFilter](#pb.TransactionFilter) |  | Unsubscribe to a filter, remove items from a filter |
| include_mempool | [bool](#bool) |  | When include_mempool is true, new unconfirmed transactions from mempool are included apart from the ones confirmed in a block. |
| include_in_block | [bool](#bool) |  | When include_in_block is true, transactions are included when they are confirmed. This notification is sent in addition to any requested mempool notifications. |
| serialize_tx | [bool](#bool) |  | When serialize_tx is true, transactions are serialized using bitcoin protocol encoding. Default is false, transaction will be Marshaled (see `Transaction`, `MempoolTransaction` and `TransactionNotification`) |






<a name="pb.Transaction"></a>

### Transaction



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The double sha256 hash of the encoded transaction. sha256(sha256(encoded_transaction)) |
| version | [int32](#int32) |  | The version of the transaction format. |
| inputs | [Transaction.Input](#pb.Transaction.Input) | repeated | List of inputs. |
| outputs | [Transaction.Output](#pb.Transaction.Output) | repeated | List of outputs. |
| lock_time | [uint32](#uint32) |  | The block height or timestamp after which this transaction is allowed. If value is greater than 500 million, it is assumed to be an epoch timestamp, otherwise it is treated as a block-height. Default is zero, or lock. |
| size | [int32](#int32) |  | The size of the transaction in bytes. |
| timestamp | [int64](#int64) |  | When the transaction was included in a block, in epoch time. |
| confirmations | [int32](#int32) |  | Number of blocks including proof of the transaction, including the block it appeared. |
| block_height | [int32](#int32) |  | Number of the block containing the transaction. |
| block_hash | [bytes](#bytes) |  | Hash of the block the transaction was recorded in. |






<a name="pb.Transaction.Input"></a>

### Transaction.Input



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  | The number of the input, starting from zero. |
| outpoint | [Transaction.Input.Outpoint](#pb.Transaction.Input.Outpoint) |  | The related outpoint. |
| signature_script | [bytes](#bytes) |  | An unlocking script asserting a transaction is permitted to spend the Outpoint (UTXO) |
| sequence | [uint32](#uint32) |  | As of BIP-68, the sequence number is interpreted as a relative lock-time for the input. |
| value | [int64](#int64) |  | Amount in satoshi. |
| previous_script | [bytes](#bytes) |  | The hash of the transaction containing the output to be spent. |
| address | [string](#string) |  | The bitcoin addresses associated with this input. |






<a name="pb.Transaction.Input.Outpoint"></a>

### Transaction.Input.Outpoint



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| hash | [bytes](#bytes) |  | The hash of the transaction containing the output to be spent. |
| index | [uint32](#uint32) |  | The index of specific output on the transaction. |






<a name="pb.Transaction.Output"></a>

### Transaction.Output



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| index | [uint32](#uint32) |  | The number of the output, starting from zero. |
| value | [int64](#int64) |  | The number of satoshis to be transferred. |
| pubkey_script | [bytes](#bytes) |  | The public key script used to pay coins. |
| address | [string](#string) |  | The bitcoin addresses associated with this output. |
| script_class | [string](#string) |  | The type of script. |
| disassembled_script | [string](#string) |  | The script expressed in Bitcoin Cash Script. |






<a name="pb.TransactionFilter"></a>

### TransactionFilter



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| addresses | [string](#string) | repeated | Filter by address(es) |
| outpoints | [Transaction.Input.Outpoint](#pb.Transaction.Input.Outpoint) | repeated | Filter by output hash and index. |
| data_elements | [bytes](#bytes) | repeated |  |
| all_transactions | [bool](#bool) |  | Subscribe/Unsubscribe to everything. Other filters will be ignored. |






<a name="pb.TransactionNotification"></a>

### TransactionNotification



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| type | [TransactionNotification.Type](#pb.TransactionNotification.Type) |  | Whether or not the transaction has been included in a block. |
| confirmed_transaction | [Transaction](#pb.Transaction) |  | A transaction included in a block. |
| unconfirmed_transaction | [MempoolTransaction](#pb.MempoolTransaction) |  | A transaction in mempool. |
| serialized_transaction | [bytes](#bytes) |  | Binary transaction, serialized using bitcoin protocol encoding. |






<a name="pb.UnspentOutput"></a>

### UnspentOutput



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| outpoint | [Transaction.Input.Outpoint](#pb.Transaction.Input.Outpoint) |  | A reference to the output given by transaction hash and index. |
| pubkey_script | [bytes](#bytes) |  | The public key script used to pay coins. |
| value | [int64](#int64) |  | The amount in satoshis |
| is_coinbase | [bool](#bool) |  | When is_coinbase is true, the output is the first in the block, a generation transaction, the result of mining. |
| block_height | [int32](#int32) |  | The block number containing the UXTO. |





 


<a name="pb.BlockNotification.Type"></a>

### BlockNotification.Type
State of the block in relation to the chain.

| Name | Number | Description |
| ---- | ------ | ----------- |
| CONNECTED | 0 |  |
| DISCONNECTED | 1 |  |



<a name="pb.GetBlockchainInfoResponse.BitcoinNet"></a>

### GetBlockchainInfoResponse.BitcoinNet
Bitcoin network types

| Name | Number | Description |
| ---- | ------ | ----------- |
| MAINNET | 0 | Live public network with monetary value. |
| REGTEST | 1 | An isolated environment for automated testing. |
| TESTNET3 | 2 | A public environment where monetary value is agreed to be zero, and some checks for transaction conformity are disabled. |
| SIMNET | 3 | Private testnets for large scale simulations (or stress testing), where a specified list of nodes is used, rather than node discovery. |



<a name="pb.TransactionNotification.Type"></a>

### TransactionNotification.Type
State of the transaction acceptance.

| Name | Number | Description |
| ---- | ------ | ----------- |
| UNCONFIRMED | 0 | A transaction in mempool. |
| CONFIRMED | 1 | A transaction in a block. |


 

 


<a name="pb.bchrpc"></a>

### bchrpc
bchrpc contains a set of RPCs that can be exposed publicly via
the command line options. This service could be authenticated or
unauthenticated.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| GetMempoolInfo | [GetMempoolInfoRequest](#pb.GetMempoolInfoRequest) | [GetMempoolInfoResponse](#pb.GetMempoolInfoResponse) | GetMempoolInfo returns the state of the current mempool. |
| GetMempool | [GetMempoolRequest](#pb.GetMempoolRequest) | [GetMempoolResponse](#pb.GetMempoolResponse) | GetMempool returns information about all transactions currently in the memory pool. Offers an option to return full transactions or just transactions hashes. |
| GetBlockchainInfo | [GetBlockchainInfoRequest](#pb.GetBlockchainInfoRequest) | [GetBlockchainInfoResponse](#pb.GetBlockchainInfoResponse) | GetBlockchainInfo returns data about the blockchain including the most recent block hash and height. |
| GetBlockInfo | [GetBlockInfoRequest](#pb.GetBlockInfoRequest) | [GetBlockInfoResponse](#pb.GetBlockInfoResponse) | GetBlockInfo returns metadata and info for a specified block. |
| GetBlock | [GetBlockRequest](#pb.GetBlockRequest) | [GetBlockResponse](#pb.GetBlockResponse) | GetBlock returns detailed data for a block. |
| GetRawBlock | [GetRawBlockRequest](#pb.GetRawBlockRequest) | [GetRawBlockResponse](#pb.GetRawBlockResponse) | GetRawBlock returns a block in a serialized format. |
| GetBlockFilter | [GetBlockFilterRequest](#pb.GetBlockFilterRequest) | [GetBlockFilterResponse](#pb.GetBlockFilterResponse) | GetBlockFilter returns the compact filter (cf) of a block as a Golomb-Rice encoded set.

**Requires CfIndex** |
| GetHeaders | [GetHeadersRequest](#pb.GetHeadersRequest) | [GetHeadersResponse](#pb.GetHeadersResponse) | GetHeaders takes a block locator object and returns a batch of no more than 2000 headers. Upon parsing the block locator, if the server concludes there has been a fork, it will send headers starting at the fork point, or genesis if no blocks in the locator are in the best chain. If the locator is already at the tip no headers will be returned. see: bchd/bchrpc/documentation/wallet_operation.md |
| GetTransaction | [GetTransactionRequest](#pb.GetTransactionRequest) | [GetTransactionResponse](#pb.GetTransactionResponse) | GetTransaction returns a transaction given a transaction hash.

**Requires TxIndex** |
| GetRawTransaction | [GetRawTransactionRequest](#pb.GetRawTransactionRequest) | [GetRawTransactionResponse](#pb.GetRawTransactionResponse) | GetRawTransaction returns a serialized transaction given a transaction hash.

**Requires TxIndex** |
| GetAddressTransactions | [GetAddressTransactionsRequest](#pb.GetAddressTransactionsRequest) | [GetAddressTransactionsResponse](#pb.GetAddressTransactionsResponse) | GetAddressTransactions returns the transactions for the given address. Offers offset, limit, and from block options.

**Requires AddressIndex** |
| GetRawAddressTransactions | [GetRawAddressTransactionsRequest](#pb.GetRawAddressTransactionsRequest) | [GetRawAddressTransactionsResponse](#pb.GetRawAddressTransactionsResponse) | GetRawAddressTransactions the serialized raw transactions for the given address. Offers offset, limit, and from block options.

**Requires AddressIndex** |
| GetAddressUnspentOutputs | [GetAddressUnspentOutputsRequest](#pb.GetAddressUnspentOutputsRequest) | [GetAddressUnspentOutputsResponse](#pb.GetAddressUnspentOutputsResponse) | GetAddressUnspentOutputs returns all the unspent transaction outputs for the given address.

**Requires AddressIndex** |
| GetUnspentOutput | [GetUnspentOutputRequest](#pb.GetUnspentOutputRequest) | [GetUnspentOutputResponse](#pb.GetUnspentOutputResponse) | GetUnspentOutput takes an unspent output in the utxo set and returns the utxo metadata or not found. |
| GetMerkleProof | [GetMerkleProofRequest](#pb.GetMerkleProofRequest) | [GetMerkleProofResponse](#pb.GetMerkleProofResponse) | GetMerkleProof returns a Merkle (SPV) proof for a specific transaction in the provided block.

**Requires TxIndex*** |
| SubmitTransaction | [SubmitTransactionRequest](#pb.SubmitTransactionRequest) | [SubmitTransactionResponse](#pb.SubmitTransactionResponse) | SubmitTransaction broadcasts a transaction to all connected peers. |
| SubscribeTransactions | [SubscribeTransactionsRequest](#pb.SubscribeTransactionsRequest) | [TransactionNotification](#pb.TransactionNotification) stream | SubscribeTransactions creates subscription to all relevant transactions based on the subscription filter. The parameters to filter transactions on can be updated by sending new SubscribeTransactionsRequest objects on the stream.

This RPC does not use bidirectional streams and therefore can be used with grpc-web. You will need to close and reopen the stream whenever you want to update the addresses. If you are not using grpc-web then SubscribeTransactionStream is more appropriate.

**Requires TxIndex to receive input metadata** |
| SubscribeTransactionStream | [SubscribeTransactionsRequest](#pb.SubscribeTransactionsRequest) stream | [TransactionNotification](#pb.TransactionNotification) stream | SubscribeTransactionStream subscribes to relevant transactions based on the subscription requests. The parameters to filter transactions on can be updated by sending new SubscribeTransactionsRequest objects on the stream.

NOTE: Because this RPC is using bi-directional streaming it cannot be used with grpc-web.

**Requires TxIndex to receive input metadata** |
| SubscribeBlocks | [SubscribeBlocksRequest](#pb.SubscribeBlocksRequest) | [BlockNotification](#pb.BlockNotification) stream | SubscribeBlocks creates a subscription for notifications of new blocks being connected to the blockchain or blocks being disconnected. |

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

