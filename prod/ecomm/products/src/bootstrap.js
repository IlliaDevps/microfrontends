import faker from "faker";

//const Node_ENV = process.env.NODE_ENV || 'development';

const mount = (el) => {
    let products ='';

    for (let i = 0 ; i< 5 ; i++){
        const name = faker.commerce.productName();
        products += `<div> ${ name } </div>`;
    }

    el.innerHTML = products  //in case we are using React we can use something lie ReactDOM.render(<App/>, el)
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file 
// Which DEFINITELY has an element with an element with an id of 'dev-products'
// we want to immediately render our app into that element

if (process.env.NODE_ENV === 'development'){
     const el = document.querySelector('#dev-products-dev-only')
     // this will work assuming our container will not have id '#dev-products-dev-only'
     if(el){
        // We are running in isolation 
        mount(el);
     }
}
// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER aoo
// NO Guarantee that an element with  an id of 'dev-products' exist
// We do not want try to immediately  render the app

export { mount };