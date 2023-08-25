const Dotenv = require('dotenv-webpack');

const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
   mode : 'development',
   devServer: {
    port: 8081,
   },
   plugins: [
    new ModuleFederationPlugin({
        name: 'products',
        filename: 'remoteEntry.js',
        exposes: {
            './ProductsIndex':'./src/bootstrap'
        },
        shared: {
            faker: {
                singleton: true,
            },
        },

    }),
    new HtmlWebpackPlugin({
        template: './public/index.html'
    }),
    new webpack.EnvironmentPlugin({
        ignoreStub: true}),
    new Dotenv(),
   ]
};