import React, { useEffect, useState } from 'react';
import {Box} from "./Box"
import { FullscreenBanner } from './FullscreenBanner';
import { MyParallax } from './MyParallax';

export const Detail=(props)=>{
    // scroll to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    return(     
        <React.Fragment>
            <FullscreenBanner title={props.adatok.leiras} />
            {Object.keys(props.temaKorok).filter(obj=>props.temaKorok[obj].length>5).map((obj, i) => <Box key={obj} tema={props.temaKorok[obj]}/>)}
        </React.Fragment>
        
    )
}

