const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    script: './resume.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./build')
  }
};
