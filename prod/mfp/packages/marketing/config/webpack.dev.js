const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
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
        new ModuleFederationPlugin({
            name: 'marketing',
            filename:'remoteEntry.js',
            exposes: {
              './MarketingApp': './src/bootstrap',
            },
            shared:[
                'react','react-dom'
            ],
        }),
        new Dotenv()
    ],
};

module.exports = merge(commonConfig, devConfig);