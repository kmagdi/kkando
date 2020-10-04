import React from 'react';
import CollectDataInnovacio from "./CollectDataInnovacio"


export const FilterInnovacio=({match})=>{
    //console.log("match.params="+match.params)
    return(
        <React.Fragment>
            <CollectDataInnovacio id={match.params.id}/>
        </React.Fragment>
       )  
}