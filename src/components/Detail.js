import React from 'react';
import {Box} from './Box';
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css';
import {Music} from "./Music";
import {Helper} from '../Helper'
import { InfoPanel } from './InfoPanel';


export const Detail=(props)=>{
    //console.log("./assets/"+props.adatok.kod+".mp3")
    Helper.scrollToTop();
    let element = null;
    if(props.success){
        element = (
            <>
                <FullscreenBanner title={props.adatok.nev} />
                <InfoPanel type="sideBySide" title="Cíím" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus. Fusce malesuada arcu est, volutpat pellentesque est tincidunt vel. Quisque porta erat orci, vel efficitur sem cursus id. Curabitur dignissim lorem in dui aliquam, in cursus metus volutpat. Suspendisse porttitor augue mollis nibh dignissim, vel suscipit tortor placerat. Nulla faucibus, justo et ornare molestie, tortor purus faucibus lectus, at efficitur erat ex et mauris. In congue diam non risus suscipit ultrices." image={require('./assets/eszt2.jpg')} />
                <div className="col"> 
                    <Music />
                    {Object.keys(props.temaKorok).filter(obj=>props.temaKorok[obj].length>5).map((obj, i) => <Box key={obj} tema={props.temaKorok[obj]} id={obj} adatok={props.adatok}/>)}
                </div>
                <div className="col" style={{padding:'0'}}>
                    {props.fotok.map((e,i) => <img key={e} src={e} alt="foto" style={{maxWidth:'100vw'}} />)}
                </div>
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a szak nem létezik" />;
    }
    return element;
}

