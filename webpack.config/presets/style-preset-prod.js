const {miniCssExtractLoader} = require('../plugins/mini-css-extract-plugin.js');

const stylePresetProd = () => {
  return {
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
  };
};

module.exports = stylePresetProd;
