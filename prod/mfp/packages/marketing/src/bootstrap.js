import React from'react';
import ReactDom from 'react-dom';

console.log(process.env.NODE_ENV);

const mount = (el) => {
    ReactDom.render(
        <h1>{'Hi there!'}</h1>,
        el
        );
};
if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {  
        mount(devRoot);
    }
}

export { mount }