const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '..', './dist'),
    clean: true,
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react-vendor',
          chunks: 'all',
        },
        redux: {
          test: /[\\/]node_modules[\\/](@reduxjs|react-redux)[\\/]/,
          name: 'redux-vendor',
          chunks: 'all',
        },
      },
    },
    runtimeChunk: 'single',
  },
});