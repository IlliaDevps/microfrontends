
import faker from 'faker';

//const Node_ENV = process.env.NODE_ENV || 'development';

const mount = (el) => {
    const cartText = `<div> you have ${faker.random.number()} items in your cart </div>`;
    el.innerHTML = cartText;
};
console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#cart-dev');

    if(el) {
        mount(el);
    }
}

export { mount };

