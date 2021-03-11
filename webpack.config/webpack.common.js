const path = require('./paths.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.src + '/index.js'
  },
  output: {
    path: path.build,
    filename: '[name].bundle.js',
    publicPath: './'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.src + '/template.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.src + '/assets/img',
          to: 'images'
        },
        {
          from: path.src + '/static',
          to: ''
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {sourceMap: true}},
          {loader: 'postcss-loader', options: {sourceMap: true}},
          {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.(?:ico|gif|jpeg|jpg|png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot|)$/i,
        type: 'asset/inline',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      }
    ]
  }
};
