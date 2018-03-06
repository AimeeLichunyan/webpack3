/**
   *created by aimeeLi in 2018-03-6
 **/
const webpack = require('webpack');
const Merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.js');
module.exports = function(env) {
   return Merge(BaseConfig,{
       output: {
           publicPath: '/',
       },
       plugins: [
           new webpack.DefinePlugin({
               'process.env': {
                   NODE_ENV: JSON.stringify('dev')
               }
           })
       ]
   })
}();