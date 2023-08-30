import { mount } from 'dashboard/DashboardApp';
import React, {useRef, useEffect} from 'react';


export default ( ) => { // we will receive the new prop we are passing down <AuthApp onSignIn = { () => setIsSignedIn(true) }/>  in the container App.js
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current)
    }, []);    
        
    return <div ref={ref} />;       
    
};