'use strict';
var path = require('path');
module.exports = {
    entry:__dirname + '/app/main.js',
    output:{
        path:__dirname + '/dist',
        filename:'bundle.js'
    },
    node: {
		fs: 'empty'
	},
    module:{
        loaders:[
            // {
			// 	test: /\.json$/,
			// 	include: path.join(__dirname, 'node_modules', 'pixi.js'),
			// 	loader: 'json',
			// },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ],
        postLoaders: [{
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'ify'
            }
        ]
    }
   
}