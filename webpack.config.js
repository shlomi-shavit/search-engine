const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js', // that is our entry point
    output: {
        path: path.resolve(__dirname, 'dist'), // where to save the bundle file, dirname = forkify-app folder
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./src/index.html'
        })
    ]
};
