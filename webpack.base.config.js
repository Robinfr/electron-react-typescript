'use strict';

const webpack = require('webpack');
const path = require('path');
// TODO: review and refactor  - https://github.com/rohmanhm/ts-electron-react-typeorm-sqlite/blob/master/webpack.config.base.js

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    externals: {
        'react-native-sqlite-storage': 'react-native-sqlite-storage',
        // 'sqlite3': 'commonjs sqlite3'
    },
    node: {
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    devtool: 'source-map',
    plugins: [
        new webpack.NormalModuleReplacementPlugin(/typeorm$/, function (result) {
            result.request = result.request.replace(/typeorm/, "typeorm/browser");
        }),
        new webpack.ProvidePlugin({
            'window.SQL': 'sql.js/js/sql.js'
        })
    ]
};
