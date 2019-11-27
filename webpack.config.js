const path = require('path');

module.exports = {
  mode: "production",
  entry: './app/app.jsx',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: [
            'react',
            'es2015'
          ]
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
}