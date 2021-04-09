const stylePreset = () => {
  return {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      {loader: 'style-loader'},
      {loader: 'css-loader', options: {sourceMap: true}},
      {loader: 'postcss-loader', options: {sourceMap: true}},
      {loader: 'sass-loader', options: {sourceMap: true}}
    ]
  };
};

module.exports = stylePreset;
