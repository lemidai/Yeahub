import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { webpack } from 'webpack';

const __dirname = path.resolve();

export default merge(common, {
  mode: 'production',

  devtool: 'source-map',

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(process.env.REACT_APP_API_URL),
    }),
  ],

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
