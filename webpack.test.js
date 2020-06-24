const path = require('path');

module.exports = {
  entry: './test/index.spec.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
      filename: 'bchrpc.spec.mjs',
      path: path.resolve(__dirname, 'test'),
      libraryTarget: 'umd'
  }
};