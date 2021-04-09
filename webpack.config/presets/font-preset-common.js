const fontPreset = () => {
  return {
    test: /\.(woff(2)?|ttf|otf|eot|)$/i,
    type: 'asset/inline',
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      }
    ]
  };
};

module.exports = fontPreset;
