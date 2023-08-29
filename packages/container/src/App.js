import React from 'react';
import MarketingApp from './components/MarketingApp';
//MarketingApp is the name of the exposes: 
//{'./MarketingApp': './src/bootstrap'} in the 
//webpack.config.js ModuleFederationPlugin 
//file for the marketing app


export default () => {
    return (
        <div>
            <h1>Hi there!!!!</h1>
            <hr />
            <MarketingApp />
        </div>
    );
}