const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
  // set this to your entry point
  entry: "./app/assets/scripts/App.js",

  // change this to your output path
  output: {
    path: path.resolve(__dirname,'./app/temp/scripts'),
    filename: "App.js",
    publicPath: "/assets/"
  },

  // create a map file for debugging
  devtool: 'source-map',

  // configure the loaders
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015'],
          compact: false
        }
      }
    ]
  },

  ///////////  uncomment this for production ////////////////
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env': {'NODE_ENV': JSON.stringify('production')}
  //   })
  // ],////////////////////////////////////////////////////////

  watch: false // change this to true to keep webpack running
};

