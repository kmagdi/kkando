import React from 'react';
import {Box} from "./Box"

export const Detail=(props)=>{
    return(
        <React.Fragment>
            <div>ide kell a reszletes leiras a szakrol, melynek az azonositoja...</div>
            {console.log(props)}
            <Box key={props} word={props.szak} />
        </React.Fragment>
        
    )
}

