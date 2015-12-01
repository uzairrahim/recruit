'use strict';

module.exports = {

	output : {
		path : __dirname + "/dist",
		publicPath : "js/",
		filename : 'main.bundled.js',
		chunkFilename: 'chunk-[name].js'
	},
	module : {
		loaders : [
			{
				test : /\.jsx?/,
				loader : 'babel',
				exclude: /node_modules/,
				query : {
					compact : false
				}
			}
		]
	}
}