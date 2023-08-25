const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const Dotenv = require('dotenv-webpack');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
         
            template: './public/index.html'
        }),
        new Dotenv()
    ],
};

module.exports = merge(commonConfig, devConfig);