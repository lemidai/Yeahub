const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '..', './src'),
      '@components': path.resolve(__dirname, '..', './src/components'),
      '@pages': path.resolve(__dirname, '..', './src/pages'),
      '@store': path.resolve(__dirname, '..', './src/store'),
      '@utils': path.resolve(__dirname, '..', './src/utils'),
      '@hooks': path.resolve(__dirname, '..', './src/hooks'),
      '@api': path.resolve(__dirname, '..', './src/api'),
      '@assets': path.resolve(__dirname, '..', './src/assets'),
      '@styles': path.resolve(__dirname, '..', './src/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    esModule: false,
                },
            },
        ],
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
      filename: 'index.html',
    }),
    new Dotenv(),
  ],
  stats: 'errors-only',
};