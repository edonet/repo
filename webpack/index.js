'use strict';


/*
 *************************************
 * 引入依赖模块
 *************************************
 */
const
    path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


/*
 *************************************
 * 输出打包配置
 *************************************
 */
module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './dist',
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css!postcss')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!postcss!sass')
            },
            {
                test: /.(png|jpg|gif|woff|woff2)$/,
                loader: 'url?limit=8192&name=img/[name].[ext]'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file?name=img/[name].[ext]'
            }
        ]
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css')
    ]
};
