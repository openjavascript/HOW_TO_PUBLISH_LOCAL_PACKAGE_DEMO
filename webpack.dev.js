const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3600,
        disableHostCheck: true,
        host: '0.0.0.0',
    },
    plugins: []
});
