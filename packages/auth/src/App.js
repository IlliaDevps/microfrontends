import React from 'react';
import { Switch,Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName, } from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

//StylesProvider is a higher-order component that allows you to pass styles to your components.
//Used to customize all the css and js generation styling of your components.

const generateClassName = createGenerateClassName({
    productionPrefix: 'au' 
});
//This is the prefix that will be applied to the generated class names. 
//This is used to generate unique class names for your components.
//instead of the prefix jss will generate with the prefix ma.

export default ({ history }) => {  
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history} >
                <Switch>
                    <Route exact path="/auth/signin" component={Signin} />
                    <Route exact path="/auth/signup" component={Signup} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};