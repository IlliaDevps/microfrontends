import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//MarketingApp is the name of the exposes: 
//{'./MarketingApp': './src/bootstrap'} in the 
//webpack.config.js ModuleFederationPlugin 
//file for the marketing app


export default () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <MarketingApp />
            </div>
        </BrowserRouter>
    );
}