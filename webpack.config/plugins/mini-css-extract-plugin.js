const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const miniCssExtractPlugin = () => {
  return new MiniCssExtractPlugin({
    filename: 'styles/[name].[contenthash].css',
    chunkFilename: '[id].css'
  });
};

const miniCssExtractLoader = () => {
  return MiniCssExtractPlugin.loader;
};

module.exports = {
  miniCssExtractPlugin,
  miniCssExtractLoader
};
