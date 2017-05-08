var path = require('path');

var config = {
    entry: './wwwroot/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/
        }]
    }
};

module.exports = config;