const path = require('./paths.js');

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin.js');
const copyWebpackPlugin = require('./plugins/copy-webpack-plugin.js');

module.exports = {
  entry: {
    main: path.src + '/index.js'
  },
  output: {
    path: path.build,
    filename: '[name].bundle.js',
    publicPath: './',
    clean: true
  },
  plugins: [
    htmlWebpackPlugin(),
    copyWebpackPlugin()
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
