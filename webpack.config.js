const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: './app.js',
	module: {
		loaders: [{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&camelCase!sass-loader')
		}, {
			test: /\.js$/,
			exclude: /node_modules/,
			include: [
				path.resolve(__dirname, 'app.js'),
				path.resolve(__dirname, 'app')
			],
			loader: 'babel-loader'
		}]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css')
	],
	resolve: {
		alias: {
			app: path.resolve(__dirname, 'app')
		}
	}
}