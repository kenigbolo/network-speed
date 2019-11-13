const path = require('path');

module.exports = {
  entry: './app.js',
  mode: 'production',
  output: {
    filename: 'module.js',
    library: 'NetworkSpeed',
    path: path.resolve(__dirname, 'dist'),
  },
};
