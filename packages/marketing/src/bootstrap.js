import React from'react';
import ReactDom from 'react-dom';
import App from './App';

//console.log(process.env.NODE_ENV);
const node_env = process.env.NODE_ENV || 'development';

const mount = (el) => {
    ReactDom.render(
        <App />,
        el
        );
};
if(node_env === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {  
        mount(devRoot);
    }
}

export { mount }