const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const TARGET = process.env.npm_lifecycle_event;

function isExternal(module) {
  const context = module.context;
  if (typeof context !== 'string') {
    return false;
  }
  return context.indexOf('node_modules') !== -1;
}

const commonConfig = {
  entry: {
    app: './src/index.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return isExternal(module);
      }
    }),
    new ExtractTextPlugin("styles.css")
  ],
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
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  }
}

const devConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "0.0.0.0",
    compress: true,
    historyApiFallback: true,
    port: 9001
  }
};

const buildConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
};

switch(TARGET) {
  case 'start': 
    console.log(`> Dev Task'`); 
    module.exports = merge(commonConfig, devConfig);
    break;
  case 'build': 
    console.log('> Build Task');
    module.exports = merge(commonConfig, buildConfig);
    break;
}