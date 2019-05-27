const path = require('path');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    //new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    compress: true,
    open: true,
  },
  entry: {
    index: [
      'babel-polyfill',
      './src/index.js'
    ]
  },
  output: {
    devtoolLineToLine: true,
    sourceMapFilename: "navtree.js.map",
    pathinfo: true,
    path: path.resolve(__dirname, 'dist'),
    filename: 'navtree.js',
    libraryTarget: 'var',
    library: 'NavTree'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: "babel-loader",
        }
      },
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, './src'),
        enforce: 'pre',
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        }
      },
      {
        test: /\.s?css$/i,
        use: ['style-loader', 'css-loader?sourceMap=true', 'sass-loader']
      }
    ]
  }
};