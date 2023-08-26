const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const Dotenv = require('dotenv-webpack');

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
         
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',        
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                // when the host is loaded will look for a remote 
                // with the same name as the entry point. In this case will look inside 
                // marketing webpack.config.js  new ModuleFederationPlugin({ name: 'marketing', ...
            },
            shared: ['react','react-dom']
        }),
        new Dotenv()
    ],
};

module.exports = merge(commonConfig, devConfig);