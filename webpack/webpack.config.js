const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  DIST: path.resolve(__dirname, '../dist'),
  SRC: path.resolve(__dirname, '../src'),
  PUBLIC: path.resolve(__dirname, '../public'),
}

module.exports = {
  entry: ['babel-polyfill',path.join(paths.SRC, 'index.js')],
  output: {
    path: paths.DIST,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
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
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name]-[hash].[ext]',
            outputPath: ('images') 
          }
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
    extensions: ['.jsx', '.js', '.json', '.scss', '.css'],
    alias: {
      '@components': path.resolve(paths.SRC, 'components')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.PUBLIC, 'index.html'),
      favicon: path.join(paths.SRC, 'assets/icons/favicon.ico')
    }),
    new MiniCssExtractPlugin({
      filename: '[hash].css',
      chunkFilename: '[name].[hash].css',
    }),
  ],
}