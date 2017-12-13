const path = require('path')

module.exports = {
    entry: {
        /*  文字列は何でもいい  */
        script: path.join(__dirname, 'dest', 'script.js')
    },
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}