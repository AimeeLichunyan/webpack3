/**
   *created by aimeeLi in 2017-08-17
 **/

 const webpack = require('webpack');
 const path = require("path")
 const OpenBrowserPlugin = require('open-browser-webpack-plugin')

 module.exports = {
   devServer: {
     historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: './src',
    port: 3033
  },
  // 配置入口文件
  entry: [

     path.resolve(__dirname, 'src/index.js')
   ],
  // 配置打包输出
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
      loaders: [
        {
          test: /\.css$/,
          // include: path.resolve(__dirname, 'src'), // 只包含src这个文件夹下的css
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
        },
        {
          test: /\.(js|jsx)$/,
              include: [
                path.resolve(__dirname, 'src')
                // path.resolve(__dirname, 'node_modules/jqwidgets-framework')
              ],
              exclude: /node_modules/,

              use: [{
                  loader: 'babel-loader',
                  query: {
                      cacheDirectory: true,

                  }
              }]
        }
      ]

    },
    resolve: {
      extensions: ['*','.js', '.jsx','json'],

    },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:3033'})
  ]
 }
