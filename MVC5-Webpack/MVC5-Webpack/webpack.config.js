var path = require('path');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'Build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.eot$/, loader: "url" }
        ]
    }
};