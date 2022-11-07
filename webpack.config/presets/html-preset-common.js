const htmlPreset = () => {
  return {
    test: /\.pug$/,
    loader: '@webdiscus/pug-loader',
  };
};

module.exports = htmlPreset;
