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
    inline: false,
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
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       // include: path.resolve(__dirname, 'src'), // 只包含src这个文件夹下的css
  //       loader: 'style!css'
  //     },
  //     {
  //             test: /\.less/,
  //             loader: 'style-loader!css-loader!less-loader?outputStyle=expanded'
  //     },
  //     {
  //       test: /\.js[x]?$/,
  //       include: path.resolve(__dirname, 'src'),
  //       exclude: /(node_modules|bower_components)/,
  //       loader: 'babel-loader',
  //       loaders: [
  //             'react-hot',
  //             'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
  //           ],
  //       query: {
  //                   "plugins": ['transform-decorators-legacy']
  //               }
  //     }
  //   ]
  //
  // },
  resolve: {
    extensions: ['*','.js', '.jsx']
  },
  plugins: [

    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:3033'})
  ]
 }
