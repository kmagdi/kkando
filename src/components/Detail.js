import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css';
import {Helper} from '../Helper';
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';
import { MyParallax } from './MyParallax';
import { ImageCarousel } from './ImageCarousel';
import Preload from 'react-preload';
import {checkIfImageExists} from './ceckIfImageExists'

export const Detail=(props)=>{
    Helper.scrollToTop();
    document.cookie = "prevSzak="+props.carouselIndex;
    useEffect(()=>{
        Helper.scrollToTop();
    },[]);
    let element = null;
    const getAnswer = (question) => {
        return [props.temaKorok[question],props.adatok[question]];
    };
    const addLinks = (str) => {
        return String(str).split(' ').map((i)=>(i.startsWith('http'))?<><br/><a className="darklink" href={i} target="_blank" rel="noopener noreferrer">Kattints ide a részletek megtekintéséhez...</a></>:<>{i} </>);
    };
    const urlPhotoSzak = "https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/szak/";
    const kep = (kepnev,nomobile) => {
        if(props.adatok.kod===undefined){
            return null;
        }else{
            const spl = kepnev.split('.');
            if(String(spl[spl.length-2]).startsWith('gyakorlat') || nomobile){
                if(String(spl[spl.length-2]).startsWith('gyakorlat')){
                    if(spl[spl.length-2] === 'gyakorlat_load'){
                        return urlPhotoSzak + props.adatok.kod + '/' + kepnev;
                    }else{
                        return urlPhotoSzak + props.adatok.kod + '/' + kepnev;
                    }
                }
                if(nomobile){
                    return urlPhotoSzak + props.adatok.kod + '/' + kepnev;
                }
            }else{
                spl[spl.length-2] += '_mobile';
                return Helper.getMODI(urlPhotoSzak + props.adatok.kod + '/' + kepnev,urlPhotoSzak + props.adatok.kod + '/' + spl.join('.'));
            }
        }
    };
    const images = {
        head:kep('head.jpg'),
        kinek:kep('kinek.jpg'),
        mitcsinal:kep('mitcsinal.jpg'),
        munkakor:kep('munkakor.jpg'),
        ismeretek:kep('ismeretek.jpg')
    };
    if(!props.failed){
        let par1el = null;
        if(props.adatok.kod!==undefined){
            par1el = (
                <MyParallax img={images.head} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <ImageCarousel kod={props.adatok.kod} bgColor={"rgba(255,255,255,0.5)"} />
                </MyParallax>
            );
        }
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

                <MyParallax img={images.head} amount={0.25} height={'40vh'} sizeToContent={true}>
                    <InfoPanel id="par2" bold={true} centered={true} type={(props.adatok.videok!=='')?"centerInfoWide":"centerInfo"} bgColor={"rgba(255,255,255,0.5)"} nomargin={true} height={'40vh'} title={(props.adatok.interju==='')?((props.adatok.videok==='')?null:<>Videók</>):<>Interjú</>} text={(props.adatok.interju==='')?
                        ((props.adatok.videok==='')?null:<>
                            {
                                String(props.adatok.videok).split(' ').map((i,index)=>{
                                    return (
                                        <React.Fragment key={'yt-video-container-'+index}>
                                            <iframe key={'yt-video-'+index} className="yt-video" src={"https://www.youtube.com/embed" + i.substring(i.lastIndexOf('/'))} frameBorder="0" allow="clipboard-write; encrypted-media" title={'YouTube videó (' + i.substring(i.lastIndexOf('/')+1) + ')'} allowFullScreen></iframe>
                                        </React.Fragment>
                                    );
                                })
                            }
                        </>)
                    :(
                        <span style={{textAlign:'justify',textShadow:'0 0 5px rgba(255,255,255,1)'}}>{props.adatok.interju}</span>
                    )} from={{opacity:0,scaleX:0.5,scaleY:0.5,ease:'power4.out'}} to={{opacity:1,scaleX:1.0,scaleY:1.0,ease:'power4.out'}} />
                </MyParallax>

                <InfoPanel index={1} id="gyakorlat" type="sideBySidePanorama" title={getAnswer('gyakorlat')[0]} text={addLinks(getAnswer('gyakorlat')[1])} moretext={["A "+(Helper.isMobile()?'lent':'jobbra')+" található ablakban tudod megtekinteni a gyakorlat helyszínét"]} panoimg={kep('gyakorlat.jpg')} loadImage={kep('gyakorlat_load.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                {[2,3,4,5].map((i)=>{
                    if(props.adatok.kod!==undefined){
                        try{
                            const imidzs = urlPhotoSzak + props.adatok.kod + '/gyakorlat'+i+'.jpg';
                            console.log('imidzs:',imidzs);
                            checkIfImageExists(imidzs, (exists) => {
                                if (exists) {
                                    // Success code
                                    console.log('létezik:',imidzs)
                                    return (
                                        <InfoPanel key={imidzs} index={i} id={"gyakorlat"+i} type="sideBySidePanorama" title={getAnswer('gyakorlat')[0]+" #"+i} text="" moretext={["A "+(Helper.isMobile()?'lent':((i%2===0)?'balra':'jobbra'))+" található ablakban tudod megtekinteni a gyakorlat helyszínét"]} panoimg={imidzs} loadImage={kep('gyakorlat_load.jpg')} from={{opacity:0,x:(i%2===0)?'-300':'300',ease:'power4.out'}} reverse={(i%2===0)} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />
                                    )
                                }else{
                                    console.log('nem létezik:',imidzs)
                                    return null;
                                }
                              });

                            
                        }catch(Exception){
                            return null
                        }
                    }else{
                        return null;
                    }
                })}

                {(props.adatok.kod===undefined)?null:<CollectData bgimage={images.head} />}
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a szak nem létezik" />;
    }
    return (
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

