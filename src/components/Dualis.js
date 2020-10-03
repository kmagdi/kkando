import React from 'react';
import CollectDataDualis from "./CollectDataDualis"


export const Dualis=({match})=>{
    //console.log("match.params="+match.params)
    return(
        <React.Fragment>
            <CollectDataDualis id={match.params.id}/>
        </React.Fragment>
       )  
}