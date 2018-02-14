const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const buildDir = path.resolve(__dirname, 'build');


module.exports = {

    entry: './index.js',
    output: {
        path: buildDir,
        filename: 'app.js'
    },
    devServer: {
        contentBase: buildDir
    },
    module: {
        loaders: [
        ],
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // plugins: [
    //     new UglifyJsPlugin()
    // ],

}