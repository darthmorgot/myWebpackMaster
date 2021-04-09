const path = require('./paths.js');

const TerserPlugin = require('terser-webpack-plugin');
const {miniCssExtractPlugin} = require('./plugins/mini-css-extract-plugin.js');
const stylePresetProd = require('./presets/style-preset-prod.js');

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
    rules: [stylePresetProd()]
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
