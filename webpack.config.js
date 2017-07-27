const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function isExternal(module) {
  const context = module.context;
  if (typeof context !== 'string') {
    return false;
  }
  return context.indexOf('node_modules') !== -1;
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/app.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "0.0.0.0",
    compress: true,
    historyApiFallback: true,
    port: 9000
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
    })
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
      }
    ]
  }
}

