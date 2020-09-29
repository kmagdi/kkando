import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css';
import {Helper} from '../Helper'
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';
import { MyParallax } from './MyParallax';
import { ImageCarousel } from './ImageCarousel';
import Preload from 'react-preload'

export const Detail=(props)=>{
    //useEffect(()=>{
        Helper.scrollToTop();
    //},[]);
    let element = null;
    const getAnswer = (question) => {
        return [props.temaKorok[question],props.adatok[question]];
    };
    const kep = (kepnev,nomobile) => {
        if(props.adatok.kod===undefined){
            return null;
        }else{
            try{
                const spl = kepnev.split('.');
                if(spl[spl.length-2]==='gyakorlat' || nomobile){
                    return require('./assets/szak/' + props.adatok.kod + '/' + kepnev);
                }else{
                    spl[spl.length-2] += '_mobile';
                    return Helper.getMODI(require('./assets/szak/' + props.adatok.kod + '/' + kepnev),require('./assets/szak/' + props.adatok.kod + '/' + spl.join('.')));
                }
            }catch(Exception){
                try{
                    return require('./assets/szak/' + props.adatok.kod + '/' + kepnev)
                }catch(Exception){
                    return require('./assets/eszt.jpg');
                }
            }
        }
    };
    /*const kepOV = (vidnev,fallbackImg,nomobile) => {
        if(props.adatok.kod===undefined){
            return [null,null];
        }else{
            try{
                return [require('./assets/szak/' + props.adatok.kod + '/' + vidnev),'vid'];
            }catch(Exception){
                return [kep(fallbackImg,nomobile),'img'];
            }
        }
    };*/
    const images = {
        head:kep('head.jpg'),
        kinek:kep('kinek.jpg'),
        mitcsinal:kep('mitcsinal.jpg'),
        munkakor:kep('munkakor.jpg'),
        ismeretek:kep('ismeretek.jpg'),
        parallax1:kep('parallax1.jpg',true),
        parallax2:kep('parallax2.jpg',true)
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
                <MyParallax img={images.parallax1} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <ImageCarousel kod={props.adatok.kod} bgColor={"rgba(255,255,255,0.5)"} />
                </MyParallax>
            );
        }
        const par2 = images.parallax2;
        let par2el = null;
        // if(par2[1]==='vid'){
        //     par2el = (
        //         <InfoPanel id="vid2" bold={true} size={6} type="videoBg" bgvid={par2[0]} bgColor={"rgba(255,255,255,0.65)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
        //     );
        // }else{
            //console.log('bgvid2222 is ' + par2[0]);
            par2el = (
                //<MyParallax img={par2[0]} amount={0.25} height={'40vh'} sizeToContent={true}>
                <MyParallax img={par2} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} type="centerInfo" bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title="Something" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus risus diam, euismod non orci ut, ornare varius eros. Cras pellentesque, sapien in consequat accumsan, nunc quam pulvinar nulla, sodales rhoncus diam mi vitae tellus. Nunc vulputate ligula nisl, id dignissim turpis vulputate sed. Aliquam tincidunt porttitor odio sed vulputate. Aliquam sit amet maximus mi, a fringilla urna. Ut quis sem a mauris facilisis rhoncus." from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>
            );
        //};
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
                <FullscreenBanner bgimage={images.head} title={props.adatok.nev} />

                <InfoPanel id="kinek" type="sideBySide" title={getAnswer('kinek')[0]} text={getAnswer('kinek')[1]} image={images.kinek} />

                <InfoPanel id="mitcsinal" type="sideBySide" title={getAnswer('mitcsinal')[0]} text={getAnswer('mitcsinal')[1]} image={images.mitcsinal} from={{opacity:0,scaleX:0.8,scaleY:0.8,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out',stagger:{amount:0.2}}} reverse={true} />

                {par1el}

                <InfoPanel id="munkakor" type="sideBySide" title={getAnswer('munkakor')[0]} text={getAnswer('munkakor')[1]} image={images.munkakor} from={{opacity:0,x:-70,ease:'power4.out'}} to={{opacity:1,x:0,ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="ismeretek" type="sideBySide" title={getAnswer('ismeretek')[0]} text={getAnswer('ismeretek')[1]} image={images.ismeretek} from={{opacity:0,scaleX:1.1,scaleY:1.1,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out',stagger:{amount:0.2}}} reverse={true} />

                {par2el}

                <InfoPanel id="gyakorlat" type="sideBySidePanorama" title={getAnswer('gyakorlat')[0]} text={getAnswer('gyakorlat')[1]} moretext={["A "+(Helper.isMobile()?'lent':'jobbra')+" található valamiben tudod megtekinteni a gyakorlat helyszínét"]} panoimg={kep('gyakorlat.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <CollectData bgimage={images.head} />
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a szak nem létezik" />;
    }
    return (
        (props.adatok.kod===undefined)?null:
        <Preload
            loadingIndicator={(
                <div style={{width:'100vw',height:'100vh',backgroundColor:'#343a40',color:'white'}}>
                    <div className="kozep">
                        {/* <h1>Képek betöltése</h1> */}
                        <img src={require('./assets/loading.gif')} alt={"logo"} />
                    </div>
                </div>
            )}
            images={Object.values(images)}
            autoResolveDelay={null}
        >
            {element}
        </Preload>
    );
}

