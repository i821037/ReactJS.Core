var path = require('path');

var babelOptions = {
    "presets": [
        "react",
        [
            "es2015",
            {
                "modules": false
            }
        ]
    ]
};

module.exports = {
    entry: {
        main: './Scripts/index.tsx'
        ,
        vendor: [
            'react',
            'react-dom'
        ]
    },
    output: {
        path: path.join(__dirname, 'wwwroot/js'),
        filename: '[name].js',
        chunkFilename: '[chunkhash].js'
    },
    
    resolve: {
        extensions: ['.ts','.tsx','.js'] // 沒有加 '.js' 會出錯，找不到模組之類的
    },
    
    module: {
        rules: [{
            test: /\.ts(x?)$/,
            exclude: path.join(__dirname, 'node_modules'),
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }, {
            test: /\.js$/,
            exclude: path.join(__dirname, 'node_modules'),
            use: [
                {
                    loader: 'babel-loader',
                    options: babelOptions
                }
            ]
        }]
    }

};

// 可以work但是編出來的檔案好奇怪