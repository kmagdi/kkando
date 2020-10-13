import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import {Helper} from '../Helper';
import Preload from 'react-preload';
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';

export const DetailInnovacio=(props)=>{
    Helper.scrollToTop();
    document.cookie = "prevSzak=0";
    useEffect(()=>{
        Helper.scrollToTop();
    },[]);
    let element = null;
    const kep = (kepnev,nomobile) => {
        if(props.adatok.kod===undefined){
            return null;
        }else{
            try{
                const spl = kepnev.split('.');
                if(nomobile){
                    return require('./assets/innovacio/' + props.adatok.kod + '/' + kepnev);
                }else{
                    spl[spl.length-2] += '_mobile';
                    return Helper.getMODI(require('./assets/innovacio/' + props.adatok.kod + '/' + kepnev),require('./assets/innovacio/' + props.adatok.kod + '/' + spl.join('.')));
                }
            }catch(Exception){
                try{
                    return require('./assets/innovacio/' + props.adatok.kod + '/' + kepnev)
                }catch(Exception){
                    return require('./assets/eszt.jpg');
                }
            }
        }
    };const images = {
        head:kep('head.jpg'),
        logo:kep('logo.png')
    };
    if(!props.failed){
        element = (
            <>
                <FullscreenBanner bgimage={images.head} title={props.adatok.nev} image={images.logo} />

                <InfoPanel id="cim1" type="sideBySide" title={props.adatok.cim1} text={props.adatok.text1} image={images.head} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="cim2" type="sideBySide" title={props.adatok.cim2} text={props.adatok.text2} image={images.head} reverse={true} from={{opacity:0,x:'-300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="cim3" type="sideBySide" title={props.adatok.cim3} text={props.adatok.text3} image={images.head} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="cim4" type="sideBySide" title={props.adatok.cim4} text={props.adatok.text4} image={images.head} reverse={true} from={{opacity:0,x:'-300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                {(props.adatok.kod===undefined)?null:<CollectData bgimage={images.head} />}
            </>
        )
    }else{
        element = <FullscreenBanner title={
            <>
                Ez az innováció nem létezik<br/>
                <a style={{fontSize:'70%',cursor:'pointer'}} href="/">Vissza a főoldalra...</a>
            </>
        } />;
    }
    return(
        //(props.adatok.kod===undefined)?null:
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
    )
    /*return(
        <div>adatok...
            <div>{props.adatok.kod}</div>
            <div>{props.adatok.nev}</div>
            <h1>{props.adatok.cim1}</h1>
            <div>{props.adatok.text1}</div>
            <div>{props.adatok.nev}</div>
            <h1>{props.adatok.cim2}</h1>
            <div>{props.adatok.text2}</div>
            <div>{props.adatok.nev}</div>
            <h1>{props.adatok.cim3}</h1>
            <div>{props.adatok.text3}</div>
        </div>
    )*/
}