const path = require('path')
const autoprefixer = require('autoprefixer');
const nodeExternals = require('webpack-node-externals')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ['transform-object-rest-spread']
      }
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
      test: /\.(woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?name=[name].[md5:hash:hex:7].[ext]'
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
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/',
  },
  devtool: 'cheap-eval-source-map',
  module: moduleObj,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.168.17.104',
        changeOrigin: true
      }
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
      allChunks: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors','manifest'],
      minChunks: 2,
    }),

    new webpack.optimize.UglifyJsPlugin({
      output: { comments: false },
    }),

    new CopyWebpackPlugin([
      { from: 'src/client/assets/map-banner.png', to: 'assets/map-banner.png' },
      { from: 'src/client/assets/slide01.jpg', to: 'assets/slide01.jpg' },
      { from: 'src/client/assets/slide02.jpg', to: 'assets/slide02.jpg' },
    ]),
  ]
}

module.exports = client
