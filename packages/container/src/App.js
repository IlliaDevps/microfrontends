import React from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {BrowserRouter} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
//MarketingApp is the name of the exposes: 
//{'./MarketingApp': './src/bootstrap'} in the 
//webpack.config.js ModuleFederationPlugin 
//file for the marketing app

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}> 
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}