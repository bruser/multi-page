const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin');
const entry = require('./entry');
const { build: rules } = require('./module-rules');
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: './js/[name].[hash].js'  // 打包后文件
    // publicPath: '/',
    // chunkFilename: '[name].chunk.js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].[hash].css",
    }),
    new CleanWebpackPlugin(
    //   ['dist'],
    //   {
    //     root: path.resolve(__dirname, '../'),
    //     verbose: true,
    //     dry: false
    //   }
    ),
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules
  },
  resolve: {
    alias: {
    },
    extensions: ['.js', '.jsx', '.css', '.scss', ".tsx"]
  },
};