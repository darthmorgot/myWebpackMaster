const imagePreset = () => {
  return {
    test: /\.(?:ico|gif|jpeg|jpg|png|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images'
        }
      }
    ]
  };
};

module.exports = imagePreset;
