const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  DIST: path.resolve(__dirname, '../dist'),
  SRC: path.resolve(__dirname, '../src'),
  PUBLIC: path.resolve(__dirname, '../public'),
}

module.exports = {
  entry: ['babel-polyfill', path.join(paths.SRC, 'index.js')],
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'file-loader'
        }
      }

    ]
  },
  devServer: {
    contentBase: paths.PUBLIC,
    historyApiFallback: true,
    compress: true,
  },
  resolve: {
    mainFiles: ['index', 'index.js','index.scss'],
    extensions: ['.jsx', '.js', '.json', '.scss', '.css']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
      favicon: path.join(paths.SRC, 'assets/icons/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  target: 'node',
}