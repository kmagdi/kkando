import React from 'react';
import {Detail} from "./Detail"


export const Szak1=()=>{
    return(
        <React.Fragment>
            <div>a reszletes adatok helye: Szak1</div>
            <Detail key={{id:1}} szak={"1"}/>
        </React.Fragment>
       )  
}