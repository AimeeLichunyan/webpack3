/**
   *created by aimeeLi in 2018-03-6
 **/
const webpack = require('webpack');
const Merge = require('webpack-merge');
const BaseConfig = require('./webpack.config.js');
const path = require('path');
const node_dir = path.resolve(__dirname,'../node_modules');
const ExtracTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(env) {
    return Merge(BaseConfig,{
        output: {
            publicPath: '/',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            // new webpack.optimize.UglifyJsPlugin({
            //     compress: {
            //         warnings: false
            //     }
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                // minChunks:Infinity,
                // minChunks: function(module, count) {
                //     return (
                //        module.resource && /\.js$/.test(module.resource) && module.resource.indexOf(
                //            path.join(__dirname,'./node_modules')
                //        ) === 0
                //     )
                // }
            }),
            // new ExtracTextPlugin('bundle.css')
        ]
    })
}();