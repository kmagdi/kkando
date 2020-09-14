import React from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';

export const Home=()=>{
    return(
        <div>
            <FullscreenBanner image={require('./assets/logo.png')} title={'Lorem ipsum dolor sit amet.'} />
            <div style={{backgroundColor:'#eee',height:'200px'}}></div>
            <MyParallax img={require('./assets/eszt2.jpg')} amount={0.25} height={'100vh'} />
            <div id="szakok" className="row justify-content-center"><div className="col-md-8 m-2"><MyCarousel/></div></div>
            <CollectData/>
        </div>

    )
}