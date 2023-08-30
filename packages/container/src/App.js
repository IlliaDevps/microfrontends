import React from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import AuthApp from './components/AuthApp';
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
                    <Switch>
                        <Route path= "/auth" component = {AuthApp}/>
                        <Route path= "/" component = {MarketingApp}/>
                    </Switch>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}