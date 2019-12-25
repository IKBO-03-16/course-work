var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'./dist')
  },
 module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              use: {
                  loader: "babel-loader"
              },
          },
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
          },
          {
              test: /\.less$/,
              use: [
                  {
                      loader: 'style-loader',
                  },
                  {
                      loader: 'css-loader',
                  },
                  {
                      loader: 'less-loader',
                  },
              ],
          },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: "index.html"
      })
  ]
};


