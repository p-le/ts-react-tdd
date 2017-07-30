const merge = require('webpack-merge');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { 
        enforce: "pre", 
        test: /\.js$/, 
        use: "source-map-loader" 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      },
    ],
  },
};
