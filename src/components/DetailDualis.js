import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import {Helper} from '../Helper';
import Preload from 'react-preload';
import { InfoPanel } from './InfoPanel';

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
                <FullscreenBanner bgimage={images.head} title={props.adatok.nev} image={images.logo} />
                <InfoPanel id="gyakorlat" type="sideBySide" title={"Something"} text={
                    <React.Fragment>
                        <span>{props.adatok.text1}</span>
                        <br/>
                        <a href={props.adatok.link} target="_blank" rel="noopener noreferrer" className="darklink">honlap</a>
                    </React.Fragment>
                } image={images.head} from={{opacity:0,x:'300',ease:'power4.out'}} to={{opacity:1,x:'0',ease:'power4.out',stagger:{amount:0.2}}} />
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a partner nem létezik" />;
    }
    return(
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
    )
}