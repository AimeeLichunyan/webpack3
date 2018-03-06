/**
   *created by aimeeLi in 2018-03-6
 **/
const merge = require('webpack-merge');
const prodWebpackConfig = require('./webpack.prod.config.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = merge(prodWebpackConfig,{
    plugins: [
        new BundleAnalyzerPlugin()
    ]
    
})