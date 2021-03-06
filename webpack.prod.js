const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin({
			sourceMap: false
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		})
	]
	plugins: [ new webpack.ProvidePlugin({ $: "jquery", jQuery: "jquery", 'Popper': 'popper.js' }) ]
	
});