const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: 'bundle.js'
  },
  module: {
    rules: [
		{ test: /\.css$/, use: 'css-loader' },
		{ test: /\.less$/,
			use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
		},
		{ 
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}
    ]
  }
};