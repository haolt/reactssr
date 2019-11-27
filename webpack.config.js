const path = require('path');

module.exports = {
  mode: "production",
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  }
}