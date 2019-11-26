const path = require('path')

module.exports = {
  mode: 'production',
  entry: './app/index.js',
  output: {
    filename: 'ChastiKey.js',
    libraryTarget: 'var',
    library: 'ChastiKey',
    path: path.resolve(__dirname, 'dist')
  }
}
