const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.renderer.config');

module.exports = merge.smart(baseConfig, {
    target: 'electron-renderer',
    entry: [
        //'react-hot-loader/patch',
        path.join(__dirname, 'src/app.ts'),
      ],
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