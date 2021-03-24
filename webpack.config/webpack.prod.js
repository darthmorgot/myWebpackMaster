const path = require('./paths.js');

const {miniCssExtractPlugin, miniCssExtractLoader} = require('./plugins/mini-css-extract-plugin.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    path: path.build,
    filename: 'scripts/[name].[contenthash].bundle.js',
    publicPath: './'
  },
  plugins: [miniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          miniCssExtractLoader(),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    runtimeChunk: {
      name: 'runtime'
    }
  },
  performance: {
    hints: false
  }
};
