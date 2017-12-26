const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.renderer.config');

module.exports = merge.smart(baseConfig, {
    entry: [
        'react-hot-loader/patch',
        './src/app.tsx'
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: [
                    path.resolve(__dirname, 'src', 'main.ts')
                ],
                loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
            }
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: 2003,
        compress: true,
        noInfo: true,
        stats: 'errors-only',
        inline: true,
        hot: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        /*watchOptions: {
            aggregateTimeout: 300,
            ignored: /node_modules/,
            poll: 100
        },*/
        historyApiFallback: {
            verbose: true,
            disableDotRule: false
        }
    }
});