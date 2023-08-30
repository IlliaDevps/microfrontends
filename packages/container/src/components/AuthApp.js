import { mount } from 'auth/AuthApp';
import React, {useRef, useEffect} from 'react';
import{useHistory} from'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
          onNavigate: ({pathname:nextPathname}) => { 
                //console.log(nextPathname);
                const {pathname} = history.location; //This is path that we are currently inside in our container app
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
           }, 
        });

        history.listen(onParentNavigate);
    }, []);    
        
    return <div ref={ref} />;       
    
};