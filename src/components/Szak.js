import React from 'react';
import {Detail} from "./Detail"


export const Szak=(props)=>{
    
    return(
        <React.Fragment>
            <Detail key={props.id} szakId={props.id}/>
        </React.Fragment>
       )  
}