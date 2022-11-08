const fontPreset = () => {
  return {
    test: /\.(woff(2)?|ttf|otf|eot|)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]',
    },
  };
};

module.exports = fontPreset;
