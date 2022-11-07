const path = require('../paths.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = () => {
  return new HtmlWebpackPlugin({
    filename: 'index.html',
    // template: path.src + '/template.html',
    template: path.src + '/template.pug',
    hash: true
  });
};

module.exports = htmlWebpackPlugin;
