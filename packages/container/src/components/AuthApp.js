import { mount } from 'auth/AuthApp';
import React, {useRef, useEffect} from 'react';
import{useHistory} from'react-router-dom';

export default ( {onSignIn} ) => { // we will reiceive the new prop we are passing down <AuthApp onSignIn = { () => setIsSignedIn(true) }/>  in the container App.js
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
          initialPath: history.location.pathname, //we are passing to mount the path that we are currently inside in our container app
          onNavigate: ({pathname:nextPathname}) => { 
                //console.log(nextPathname);
                const {pathname} = history.location; //This is path that we are currently inside in our container app
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
           }, 
           onSignIn,
           /*onSignIn: () => {
               // console.log('User signed in')
               onSignIn();
           },*/
        });

        history.listen(onParentNavigate);
    }, []);    
        
    return <div ref={ref} />;       
    
};