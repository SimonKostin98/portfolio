const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const SRC_DIRECTORY = path.resolve(__dirname, '..', 'src');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: SRC_DIRECTORY,
        use: {
          loader: 'babel-loader',
          options: {
            cacheCompression: false,
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|pdf|ico|webp|woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, SRC_DIRECTORY, 'assets'),
      '@components': path.resolve(__dirname, SRC_DIRECTORY, 'components'),
      '@src': path.resolve(__dirname, SRC_DIRECTORY),
      '@views': path.resolve(__dirname, SRC_DIRECTORY, 'views'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      inject: 'body',
      favicon: './src/assets/images/favicon.ico',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};
