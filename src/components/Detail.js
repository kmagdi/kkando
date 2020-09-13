import React from 'react';
import {Box} from "./Box"

export const Detail=(match)=>{
    return(
        <React.Fragment>
            <div>ide kell a reszletes leiras a szakrol, melynek az azonositoja={match.params.id}</div>
            {console.log(match.params)}
            <Box key={match.params.id} word={match.params} />
        </React.Fragment>
        
    )
}

