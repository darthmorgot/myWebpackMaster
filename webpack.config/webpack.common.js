const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/template.html')
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../src/assets/img'),
          to: 'images'
        },
        {
          from: path.resolve(__dirname, '../src/static'),
          to: ''
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|jpeg|jpg|png)$/i,
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
        test: /\.(woff(2)?|ttf|otf|eot|svg|)$/i,
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
