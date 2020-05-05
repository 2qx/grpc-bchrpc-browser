# grpc-bchrpc-browser

A bchd rpc client for browsers using grpc/grpc-web 

This package provides a simple gRPC client for connecting web applications to 
a [BCHD](https://bchd.cash) full node.

## Motivation

This project uses Google's grpc/grpc-web library 
to generate the client rather than the older and 
more widely used @improbable-eng/grpc-web.

The client is built from the pb files in advance rather
than on-the-fly, a functionality which may be employed with the @improbable library.

## See also

It's likely that these versions may be more what you're looking for in your project:

For an implementation with node compatibility & TypeScript 
see: [grpc-bchrpc-web](https://github.com/simpleledgerinc/grpc-bchrpc-web)

For an implementation using a local gcash node from nodejs 
see: [grpc-bchrpc-node](https://github.com/simpleledgerinc/grpc-bchrpc-node)

## Usage

For an example usage subscribing to transactions see `example/`


## Scripts

**Note:** this project was created in node v12.2.0 (LTS) and used `protoc` version 3.11.4; and is open to using features from es2017 anthough initally targeted at es6.

### Build

To transpile, browserify and minify use:
    
    npm run build


### Updating the Spec

If for some reason you need to update the gcash proto files yourself to add some future functionality use:

**Important** an installed version of `protoc` [install](https://github.com/protocolbuffers/protobuf/releases/latest)
 is required to run `pb-build`. 

    npm run pb-clean     # remove old definitions
    npm run pb-update    # download bchrpc.proto from gcash/bchd/master
    npm run pb-build     # create client library

## BCHD Full Nodes w/ gRPC

Mainnet:
* https://bchd.greyh.at:8335
* https://bchd.imaginary.cash:8335
* https://bchd.fountainhead.cash:443
* https://bchd.sploit.cash:443
    

Testnet:
* https://bchd.greyh.at:18335
* https://bchd-testnet.greyh.at:18335