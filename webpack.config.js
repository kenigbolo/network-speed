const path = require('path');

module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    filename: 'module.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
