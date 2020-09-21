import React from 'react';
import CollectData from "./CollectData"
import { MyCarousel } from './MyCarousel';  
import { MyParallax } from './MyParallax';
import { FullscreenBanner } from './FullscreenBanner';
import { InfoPanel } from './InfoPanel';

export const Home=()=>{
    const tempSeparator = <div style={{backgroundColor:'#eee',height:'200px'}}></div>;
    return(
        <div>
            <FullscreenBanner id="home" image={require('./assets/logo.png')} title={'UNDER CONSTRUCTION'} />
            <InfoPanel id="iskola" type="centerInfo" title="Iskolánkról..." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus. Fusce malesuada arcu est, volutpat pellentesque est tincidunt vel. Quisque porta erat orci, vel efficitur sem cursus id. Curabitur dignissim lorem in dui aliquam, in cursus metus volutpat. Suspendisse porttitor augue mollis nibh dignissim, vel suscipit tortor placerat. Nulla faucibus, justo et ornare molestie, tortor purus faucibus lectus, at efficitur erat ex et mauris. In congue diam non risus suscipit ultrices." />
            <MyParallax img={require('./assets/eszt2.jpg')} amount={0.25} height={'100vh'} />
            {tempSeparator}
            <div id="szakok" className="row justify-content-center">
                    <MyCarousel/>
            </div>
            <CollectData/>
        </div>

    )
}