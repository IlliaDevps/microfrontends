const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');


const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://localhost:8080/',
    },
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',        
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js',
                auth: 'auth@http://localhost:8082/remoteEntry.js',
                //dashboard: 'dashboard@http://localhost:8083/remoteEntry.js',

                // when the host is loaded will look for a remote 
                // with the same name as the entry point. In this case will look inside 
                // marketing webpack.config.js  new ModuleFederationPlugin({ name: 'marketing', ...
            },
            shared: packageJson.dependencies,
            // shared to only use one copy of react in the container we get the shared 
            // dependencies from the package.json file
        }),
        
    ],
};

module.exports = merge(commonConfig, devConfig);