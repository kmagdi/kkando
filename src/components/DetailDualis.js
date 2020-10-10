import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import {Helper} from '../Helper';
import Preload from 'react-preload';
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';

export const DetailDualis=(props)=>{
    Helper.scrollToTop();
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
                    return require('./assets/dualis/' + props.adatok.kod + '/' + kepnev);
                }else{
                    spl[spl.length-2] += '_mobile';
                    return Helper.getMODI(require('./assets/dualis/' + props.adatok.kod + '/' + kepnev),require('./assets/dualis/' + props.adatok.kod + '/' + spl.join('.')));
                }
            }catch(Exception){
                try{
                    return require('./assets/dualis/' + props.adatok.kod + '/' + kepnev)
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
                <FullscreenBanner bgimage={images.head} title={
                    <>
                        <span>{props.adatok.nev}</span><br/>
                        <a href={props.adatok.link} target="_blank" rel="noopener noreferrer"><small>{'Ugrás ' + (Helper.isVowel(String(props.adatok.nev).charAt(0))?'az':'a') + ' ' + props.adatok.nev + ' honlapjára...'}</small></a>
                    </>
                } image={images.logo} />
                
                <InfoPanel id="text1" type="sideBySide" title={props.adatok.text1}  image={kep('kep1.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="text2" type="sideBySide"  text={props.adatok.text2} image={kep('kep2.jpg')} reverse={true} from={{opacity:0,x:'-300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="text3" type="sideBySide"  text={props.adatok.text3} image={kep('kep3.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="text4" type="sideBySide"  text={props.adatok.text4} image={kep('kep4.jpg')} reverse={true} from={{opacity:0,x:'-300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                <InfoPanel id="text5" type="sideBySide"  text={props.adatok.text5} image={kep('kep5.jpg')} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />

                {(props.adatok.kod===undefined)?null:<CollectData bgimage={images.head} />}
            </>
        )
    }else{
        element = <FullscreenBanner title={
            <>
                Ez a partner nem létezik<br/>
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
}