import React from'react';
import ReactDom from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';

//console.log(process.env.NODE_ENV);
const node_env = process.env.NODE_ENV || 'development';

//Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();

    if(onNavigate){
        history.listen(onNavigate)
    }
    ReactDom.render(<App history={history}/>, el);
    return {
        onParentNavigate({pathname:nextPathname}){
            //console.log(location.pathname);
            //console.log('container just navigated');
            const {pathname} = history.location;

            if(pathname!== nextPathname){
                history.push(nextPathname);
            }
        }
    }
};  
//If we are in development and in isolation, call mount immediately
if(node_env === 'development'){
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {  
        mount(devRoot, { defaultHistory: createBrowserHistory() });//When call the mount function when are in insolation we are going to  create a BrowserHistory instance and give it as a property called default history
    }
}

export { mount }