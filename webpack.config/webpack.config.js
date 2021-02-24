const {merge} = require('webpack-merge');

const common = require('./webpack.common.js');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = env => {
  switch (env) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return merge(common, prod);
    default:
      throw new Error('No matching configuretion was found');
  }
};
