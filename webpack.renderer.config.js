const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
    target: 'electron-renderer',
    entry: {
        app: './src/app.ts'
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
});