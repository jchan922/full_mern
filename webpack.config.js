// tell webpack what to tell babel to do
// how to bundle the code

var webpack = require('webpack')                        // boiler plate code for webpack/babel
var path = require('path')

module.exports = {
    entry: {                                            // find the react code here and compile
        app: './src/app.js'
    },
    output: {                                           // put compiled code from entry result here
        filename: 'public/build/bundle.js',
        sourceMapFilename: 'public/build/bundle.map'
    },
    devtool: '#source-map',
    module: {                                           // use babel and use these presets
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}
