import React, { useReducer } from 'react';
import axios from 'axios';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
 
    const Alert = props => {
        const initialState = null;
        const [state, dispatch] = useReducer(alertReducer, initialState);
        //set alert
    }
return (
    <alertContext.Provider
    value={{
       alert:state,
       setAlert
     
    }}
    {props.children}
    </AlertContext.Provider>

    
)