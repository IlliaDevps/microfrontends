import {createApp} from 'vue'
import Dashboard from '../components/Dashboard.vue'

//console.log(process.env.NODE_ENV);
const node_env = process.env.NODE_ENV || 'development';

//Mount function to start up the app
const mount = (el ) => {
    const app = createApp(Dashboard);
    app.mount(el) // this mount is releated to how Vue show a comonent inside the DOM
};  

//If we are in development and in isolation, call mount immediately
if(node_env === 'development'){
    const devRoot = document.querySelector('#_dashboard-dev-root');
    if (devRoot) {  
        mount(devRoot );
    }
}

export { mount }