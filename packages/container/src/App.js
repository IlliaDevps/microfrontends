import React, {lazy , Suspense , useState, useEffect} from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {Router, Route , Switch, Redirect} from 'react-router-dom';

/*import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';*/
import Progress from './components/Progress';
import Header from './components/Header';
import {createBrowserHistory} from 'history'

const MarketingApp = lazy(() => import('./components/MarketingApp')); //lazy just load the component when we needed
const AuthApp = lazy(() => import('./components/AuthApp'));
const DashboardApp = lazy(() => import('./components/DashboardApp'));


//MarketingApp is the name of the exposes: 
//{'./MarketingApp': './src/bootstrap'} in the 
//webpack.config.js ModuleFederationPlugin 
//file for the marketing app

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
});

const history = createBrowserHistory();

export default () => {
    
    const [isSignedIn, setIsSignedIn] = useState (false) // react Hooks look later and declaring a peace of states
    // check later to use a state management library like Redux ...

    useEffect(() => {
        if (isSignedIn){
            history.push('/dashboard')
        }
    }, [isSignedIn] )

    return (
        <Router history = {history}>
            <StylesProvider generateClassName={generateClassName}> 
                <div>
                    <Header onSignOut={ () => setIsSignedIn(false) } isSignedIn={isSignedIn}/>
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            <Route path= "/auth">
                                <AuthApp onSignIn = { () => setIsSignedIn(true) }/> 
                            </Route>
                            <Route path= "/dashboard">
                                { !isSignedIn &&  <Redirect to = "/"/> }
                                <DashboardApp/>
                            </Route>
                            <Route path= "/" component = {MarketingApp}/>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </Router>
    );
}