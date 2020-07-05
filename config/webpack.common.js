const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const tsLoader = {
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'ts-loader',
  },
};

const plugins = [
  new webpack.ProgressPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html'),
  }),
];

module.exports = {
  entry: [path.resolve(__dirname, '../src/index.tsx')],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [tsLoader],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
  target: 'web',
  plugins,
};
