const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      },
      { test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ]
    // rules: [
    //   {
    //     use: 'babel-loader',
    //     test: /\.js$/,
    //     exclude: /node_modules/
    //   }
    // ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    })
  ]
};
