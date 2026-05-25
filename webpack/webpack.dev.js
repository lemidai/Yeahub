import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const __dirname = path.resolve();

export default merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,

    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
});
