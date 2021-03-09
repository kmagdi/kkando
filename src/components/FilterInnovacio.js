import React from 'react';
import CollectDataInnovacio from "./CollectDataInnovacio"


export const FilterInnovacio=({match})=>{
    return(
        <React.Fragment>
            <CollectDataInnovacio id={match.params.id}/>
        </React.Fragment>
       )  
}