import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css';
import {Helper} from '../Helper'
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';
import { MyParallax } from './MyParallax';
import { ImageCarousel } from './ImageCarousel';

export const Detail=(props)=>{
    //console.log(props.adatok.kod);
    useEffect(()=>{
        Helper.scrollToTop();
    },[]);
    let element = null;
    const getAnswer = (question) => {
        return [props.temaKorok[question],props.adatok[question]];
    };
    const kep = (kepnev) => {
        if(props.adatok.kod===undefined){
            return null;
        }else{
            try{
                return require('./assets/szak/' + props.adatok.kod + '/' + kepnev);
            }catch(Exception){
                //console.log('404 not available: ./assets/szak/' + props.adatok.kod + '/' + kepnev);
                return require('./assets/eszt.png');
            }
        }
    };
    const kepOV = (vidnev,fallbackImg) => {
        if(props.adatok.kod===undefined){
            return [null,null];
        }else{
            try{
                return [require('./assets/szak/' + props.adatok.kod + '/' + vidnev),'vid'];
            }catch(Exception){
                try{
                    return [require('./assets/szak/' + props.adatok.kod + '/' + fallbackImg),'img'];
                }catch(Exception){
                    //console.log('404 not available: ./assets/szak/' + props.adatok.kod + '/' + kepnev);
                    return [require('./assets/eszt.png'),'img'];
                }
            }
        }
    };
    if(!props.failed){
        // const par1 = kepOV('vid1.mp4','parallax1.jpg');
        // let par1el = null;
        // if(par1[1]=='vid'){
        //     par1el = (
        //         <InfoPanel id="vid1" bold={true} size={6} type="videoBg" bgvid={par1[0]} bgColor={"rgba(255,255,255,0.65)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
        //     );
        // }else{
        //     par1el = (
        //         <MyParallax img={par1[0]} amount={0.25} height={'40vh'} sizeToContent={true}>
        //             <InfoPanel id="par1" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
        //         </MyParallax>
        //     );
        // };
        let par1el = null;
        if(props.adatok.kod!==undefined){
            par1el = (
                <MyParallax img={kep('parallax1.jpg')} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <ImageCarousel kod={props.adatok.kod} bgColor={"rgba(255,255,255,0.5)"} />
                </MyParallax>
            );
        }
        const par2 = kepOV('vid2.mp4','parallax2.jpg');
        let par2el = null;
        if(par2[1]=='vid'){
            par2el = (
                <InfoPanel id="vid2" bold={true} size={6} type="videoBg" bgvid={par2[0]} bgColor={"rgba(255,255,255,0.65)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
            );
        }else{
            //console.log('bgvid2222 is ' + par2[0]);
            par2el = (
                <MyParallax img={par2[0]} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>
            );
        };
        element = (
            <>
                {
                    /*
                     *      kinek
                     *      mitcsinal
                     *      munkakor
                     *      ismeretek
                     *      gyakorlat
                     */
                }
                <FullscreenBanner bgimage={kep('head.jpg')} title={props.adatok.nev} />

                <InfoPanel id="kinek" type="sideBySide" title={getAnswer('kinek')[0]} text={getAnswer('kinek')[1]} image={kep('kinek.jpg')} />

                <InfoPanel id="mitcsinal" type="sideBySide" title={getAnswer('mitcsinal')[0]} text={getAnswer('mitcsinal')[1]} image={kep('mitcsinal.jpg')} from={{opacity:0,scaleX:0.8,scaleY:0.8,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out',stagger:{amount:0.2}}} reverse={true} />

                {par1el}

                <InfoPanel id="munkakor" type="sideBySide" title={getAnswer('munkakor')[0]} text={getAnswer('munkakor')[1]} image={kep('munkakor.jpg')} from={{opacity:0,x:-70,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="ismeretek" type="sideBySide" title={getAnswer('ismeretek')[0]} text={getAnswer('ismeretek')[1]} image={kep('ismeretek.jpg')} from={{opacity:0,scaleX:1.1,scaleY:1.1,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out',stagger:{amount:0.2}}} reverse={true} />

                {par2el}

                <InfoPanel id="gyakorlat" type="sideBySide" title={getAnswer('gyakorlat')[0]} text={getAnswer('gyakorlat')[1]} image={kep('gyakorlat.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <CollectData bgimage={kep('head.jpg')} />
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a szak nem létezik" />;
    }
    return element;
}

