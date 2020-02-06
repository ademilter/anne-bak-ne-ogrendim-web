// this file for WebStorm alias path
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './components'),
      '@interfaces': path.resolve(__dirname, './interfaces'),
      '@utils': path.resolve(__dirname, './utils')
    }
  }
}
