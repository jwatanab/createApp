const path = require('path')

module.exports = {
    entry: {
        /*  文字列は何でもいい  */
        script: path.join(__dirname, 'dest', 'script.js')
    },
    output: {
        /*  文字列は何でもいい  */
        path: path.join(__dirname, 'bundle'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /*  文字列は何でもいい  */
                options: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}