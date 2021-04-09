const path = require('./paths.js');

const htmlWebpackPlugin = require('./plugins/html-webpack-plugin.js');
const copyWebpackPlugin = require('./plugins/copy-webpack-plugin.js');

const scriptPreset = require('./presets/script-preset-common.js');
const stylePreset = require('./presets/style-preset-common.js');
const imagePreset = require('./presets/image-preset-common.js');
const fontPreset = require('./presets/font-preset-common.js');

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
      scriptPreset(),
      stylePreset(),
      imagePreset(),
      fontPreset()
    ]
  }
};
