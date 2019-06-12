module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'css-loader',
        'sass-loader'
      ]
    }]
  }
}
