import React from 'react';
import CollectDataDualis from "./CollectDataDualis"


export const Dualis=({match})=>{
    return(
        <React.Fragment>
            <CollectDataDualis id={match.params.id}/>
        </React.Fragment>
       )  
}