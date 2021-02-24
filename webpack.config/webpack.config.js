const {merge} = require('webpack-merge');

const common = require('./webpack.common.js');
const dev = require('./webpack.dev.js');
const prod = require('./webpack.prod.js');

module.exports = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return merge(common, dev);
    case 'production':
      return merge(common, prod);
    default:
      throw new Error('No matching configuration was found');
  }
};
