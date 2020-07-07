const path = require('path');

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  target: 'webworker',
  devtool: 'source-map',
  output: {
      filename: 'bchrpc.webworker.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'umd'
  }
};