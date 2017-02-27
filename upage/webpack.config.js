'use strict';


/*
 *******************************************
 * 加载依赖模块
 *******************************************
 */
const
    path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');


/*
 *******************************************
 * 抛出打包配置
 *******************************************
 */
module.exports = {
    context: __dirname,
    entry: {
        index: './src/index.js',
        vendor: ['babel-polyfill/dist/polyfill', './src/vue.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        noParse: [/^babel-polyfill/],
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract([
                    'css-loader', 'postcss-loader', 'sass-loader?outputStyle=compressed'
                ])
            },
            {
                test: /.(png|jpg|gif|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            },
            {
                test: /\.(mp4|ogg|svg)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            },
            {
                test: /\.(html|tpl)$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        alias: {
            utils: path.resolve(__dirname, '../utils')
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: { warnings: false }
        // }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new ExtractTextPlugin('[name].css')
    ]
};
