import React from 'react';
import {Box} from "./Box"

export const Detail=(props)=>{
    return(
        <React.Fragment>
            <div> ide kerul egy altalanos leiras a szakrol, melynek az azonositoja:{props.szakId}</div>
             <Box key={props} word={props.szakId} />
        </React.Fragment>
        
    )
}

