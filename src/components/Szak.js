import React from 'react';
import CollectDataSpec from "./CollectDataSpec"


export const Szak=({match})=>{
    return(
        <React.Fragment>
            <CollectDataSpec id={match.params.id}/>
        </React.Fragment>
       )  
}