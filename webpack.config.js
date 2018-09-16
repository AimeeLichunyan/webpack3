/**
   *created by aimeeLi in 2017-08-17
 **/

const webpack = require("webpack")
const path = require("path")
const ExtracTextPlugin = require("extract-text-webpack-plugin")
const OpenBrowserPlugin = require("open-browser-webpack-plugin")

module.exports = {
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		contentBase: "./src",
		port: 3033
	},
	// devtool: "source-map",
	// 配置入口文件
	entry: {

		"a": path.resolve(__dirname, "src/a.js"),
		"b": path.resolve(__dirname, "src/b.js"),
		vendor: ['./src/c.js']
	},
	// 配置打包输出
	output: {
		path: path.resolve(__dirname, "./dist"),  
		filename: "[name].js",  
	},
	
	module: {
		loaders: [
			{
				test: /\.css$/,
				// include: path.resolve(__dirname, 'src'), // 只包含src这个文件夹下的css
				// loader: "style-loader!css-loader"
				loader: ExtracTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
			},
			{
				test: /\.scss/,
				loader: "style-loader!css-loader!sass-loader?outputStyle=expanded"
			},
			{
				test: /\.less/,
				loader: "style-loader!css-loader!less-loader?outputStyle=expanded"
			},
			{
				test: /\.(js|jsx)$/,
				include: [
					path.resolve(__dirname, "src")
					// path.resolve(__dirname, 'node_modules/jqwidgets-framework')
				],
				exclude: /node_modules/,

				use: [{
					loader: "babel-loader",
					query: {
						cacheDirectory: true,

					}
				}]
			}
		]

	},
	resolve: {
		extensions: ["*",".js", ".jsx","json"],

	},
	plugins: [
		new ExtracTextPlugin({
			filename: "[name].css",
		}),
		// new webpack.NamedModulesPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new OpenBrowserPlugin({url: "http://localhost:3033"})
	]
}
