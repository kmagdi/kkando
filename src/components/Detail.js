import React from 'react';
import {Box} from "./Box"
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css'
import Music from "./Music";


export const Detail=(props)=>{
    console.log("./assets/"+props.adatok.kod+".mp3")

    return(
        <React.Fragment>
           
            <FullscreenBanner title={props.adatok.leiras} />
            <div className="col"> <Music />
                {Object.keys(props.temaKorok).filter(obj=>props.temaKorok[obj].length>5).map((obj, i) => <Box key={obj} tema={props.temaKorok[obj]} id={obj} adatok={props.adatok}/>)}
            </div>  
           
            <div className="col">
                {props.fotok.map((e,i) => <img key={e} src={e} alt="foto"/>)}
            </div>
            
        </React.Fragment>
    )
}

