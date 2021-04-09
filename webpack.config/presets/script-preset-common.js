const scriptPreset = () => {
  return {
    test: /\.js$/i,
    exclude: /node_modules/,
    use: ['babel-loader']
  };
}

module.exports = scriptPreset;
