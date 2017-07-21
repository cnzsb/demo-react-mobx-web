const path = require('path')
const pathRoot = path.resolve(__dirname, '..')
const pathSrc = path.resolve(pathRoot, 'src')
const pathDist = path.resolve(pathRoot, 'dist')

module.exports = {
  entry: path.resolve(pathSrc, 'index.js'),
  output: {
    path: pathDist,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: pathSrc,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: pathSrc
      }
    ]
  }
}
