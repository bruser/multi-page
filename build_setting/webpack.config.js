const path = require('path');
const webpack = require('webpack');
const entry = require('./entry');
const { server: rules } = require('./module-rules');
module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, '../dist'), // 输出的路径
    filename: '[name].bundle.js'  // 打包后文件
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换(HMR)
    new webpack.NamedModulesPlugin()
  ],
  module: {
    rules
  },
  resolve: {
    alias: {
    },
    extensions: ['.js', '.jsx', '.tsx', '.css', '.scss']
  },
};