import React from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  

export const Home=()=>{
    return(
        <div>
            <div className="row justify-content-center"><div className="col-md-6 m-2"><MyCarousel/></div></div>
            <CollectData/>
        </div>

    )
}