import React from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';

export const Home=()=>{
    const tempSeparator = <div style={{backgroundColor:'#eee',height:'200px'}}></div>;
    return(
        <div>
            <FullscreenBanner image={require('./assets/logo.png')} title={'Lorem ipsum dolor sit amet.'} />
            {tempSeparator}
            <MyParallax img={require('./assets/eszt2.jpg')} amount={0.25} height={'100vh'} />
            {tempSeparator}
            <div id="szakok" className="row justify-content-center">
                    <MyCarousel/>
            </div>
            <CollectData/>
        </div>

    )
}