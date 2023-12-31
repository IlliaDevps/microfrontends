import React from 'react';
import { Switch,Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName, } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';
//StylesProvider is a higher-order component that allows you to pass styles to your components.
//Used to customize all the css and js generation styling of your components.

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma' 
});
//This is the prefix that will be applied to the generated class names. 
//This is used to generate unique class names for your components.
//instead of the prefix jss will generate with the prefix ma.

export default ({ history }) => {  
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history} >
                <Switch>
                    <Route exact path="/pricing" component = {Pricing} />
                    <Route exact path="/" component = {Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};