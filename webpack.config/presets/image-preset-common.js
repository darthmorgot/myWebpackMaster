const imagePreset = () => {
  return {
    test: /\.(ico|gif|jpeg|jpg|png|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name][ext]',
    },
  };
};

module.exports = imagePreset;
