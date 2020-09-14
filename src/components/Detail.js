import React, { useEffect, useState } from 'react';
import {Box} from "./Box"

export const Detail=(props)=>{
  
    return(     
        <React.Fragment>
           <h1>{props.adatok.leiras}</h1>
            {Object.keys(props.temaKorok).filter(obj=>props.temaKorok[obj].length>5).map((obj, i) => <Box key={obj} tema={props.temaKorok[obj]}/>)}
        </React.Fragment>
        
    )
}

