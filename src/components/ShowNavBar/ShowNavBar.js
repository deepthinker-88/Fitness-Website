import React from 'react';

import {useState,useEffect} from 'react'
import { useLocation } from 'react-router-dom';

export default function ToShowNavbar({children}){
    const[showNavBar,setShowNavbar] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        console.log(location)
        if(location.pathname === '/'){
            setShowNavbar(true);
        }else{
            setShowNavbar(false);
        }

    },[location]);
    return(
        <div>{showNavBar && children}</div>
    )
}



