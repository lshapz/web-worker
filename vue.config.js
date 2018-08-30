var path = require('path')

module.exports = {
	configureWebpack: {
		output: {
			path: path.join(__dirname, 'dist'),
			filename: 'bundle.js',
			globalObject: 'this'
		},
	}
}