const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: '[name].[contenthash].js',
  },
  entry: {
    index: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  stats: "errors-only",
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: [
          'source-map-loader'
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'},
      },
      {
        test: /\.html$/,
        use: [{loader: 'html-loader'},
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/img/favicon.ico',
    }),
    // new FaviconsWebpackPlugin('./src/img/logo.svg'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
