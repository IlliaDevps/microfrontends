import React, {lazy , Suspense , useState} from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {BrowserRouter, Route , Switch} from 'react-router-dom';

/*import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';*/
import Progress from './components/Progress';
import Header from './components/Header';

const MarketingApp = lazy(() => import('./components/MarketingApp'));
const AuthApp = lazy(() => import('./components/AuthApp'));


//MarketingApp is the name of the exposes: 
//{'./MarketingApp': './src/bootstrap'} in the 
//webpack.config.js ModuleFederationPlugin 
//file for the marketing app

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState (false) // react Hooks look later and declaring a peace of states
    // check later to use a state management library like Redux

    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}> 
                <div>
                    <Header onSignOut={ () => setIsSignedIn(false) } isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path= "/auth">
                                <AuthApp onSignIn = { () => setIsSignedIn(true) }/> 
                            </Route>
                            <Route path= "/" component = {MarketingApp}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}