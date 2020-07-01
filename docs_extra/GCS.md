

// key is first 128 bits of hash

// P = 19 // default 

// N = 0 // default

// n = length of data in the filter, the sum input outpoints and output public 
M = 784931


Serialized Outpoints
// 32-byte little endian hash followed by 4-byte little endian
// index.


// KeySize 16 bytes
// hashKey is the blockhash or empty for mempool


Taking block with one output height 100000 as an example, a call to `GetBlockFilter` returns
the filter: `CUxEtt7jmLr8wDOL38TIzMZyj8midV5RQA==`

As binary:

    00001001 01001100 01000100 10110110 
    11011110 11100011 10011000 10111010 
    11111100 11000000 00110011 10001011 
    11011111 11000100 11001000 11001100 
    11000110 01110010 10001111 11001001 
    10100010 01110101 01011110 01010001 
    01000000

DeSerialized:

`0000 1001`  The first byte the number of items in the filter, which is used to match items.

| Quotent (bin)     | Remainder (bin)                   | Quo.    | Remainder    |    Delta     |    Value     |   
|-------------------|-----------------------------------|---------|--------------|-------------:|-------------:|
|    `0        `    |   `100    11000100    01001011`   |    0    |    312395    |    312395    |    312395    |
|    `0        `    |   `110    11011110    11100011`   |    0    |    450275    |    450275    |    762670    |
|    `10       `    |   `011    00010111    01011111`   |    1    |    202591    |    726879    |    1489549   |
|    `10       `    |   `011    00000000    11001110`   |    1    |    196814    |    721102    |    2210651   |
|    `0        `    |   `010    11110111    11110001`   |    0    |    194545    |    194545    |    2405196   |
|    `0        `    |   `011    00100011    00110011`   |    0    |    205619    |    205619    |    2610815   |
|    `0        `    |   `001    10011100    10100011`   |    0    |    105635    |    105635    |    2716450   |
|    `11110    `    |   `010    01101000    10011101`   |    4    |    157853    |    2255005   |    4971455   |
|    `0        `    |   `101    01111001    01000101`   |    0    |    358725    |    358725    |    5330180   |
|    `000000   `    |                                   |         |              |              |              |


