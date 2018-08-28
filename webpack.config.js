const path = require('path')
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test: /\.css$|\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
          'less-loader',
        ],
      }),
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }
  ]
}

const client = {
  entry: {
    vendors: ['react','react-dom','react-router-dom','react-weui','weui'],
    client: './src/client/index.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  devtool: 'cheap-eval-source-map',
  module: moduleObj,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/api': 'http://192.168.2.198'
    },
    port: 3000,
    historyApiFallback: true,
    // hot: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    }),
    
    new ExtractTextPlugin({
      filename: "styles.css",
      allChunks: true,
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors','manifest'],
      minChunks: 2,
    }),

    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
    }),
  ]
}

module.exports = client
