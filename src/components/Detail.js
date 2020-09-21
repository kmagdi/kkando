import React, {useEffect} from 'react';
import { FullscreenBanner } from './FullscreenBanner';
import './Details.css';
import {Helper} from '../Helper'
import { InfoPanel } from './InfoPanel';
import CollectData from './CollectData';

export const Detail=(props)=>{
    //console.log("./assets/"+props.adatok.kod+".mp3")
    useEffect(()=>{
        Helper.scrollToTop();
    },[]);
    let element = null;
    const getAnswer = (question) => {
        return [props.temaKorok[question],props.adatok[question]];
    }
    if(!props.failed){
        element = (
            <>
                <FullscreenBanner title={props.adatok.nev} />
                <InfoPanel id="kinek" type="sideBySide" title={getAnswer('kinek')[0]} text={getAnswer('kinek')[1]} image={require('./assets/eszt2.jpg')} />
                <InfoPanel id="mitcsinal" type="sideBySide" title={getAnswer('mitcsinal')[0]} text={getAnswer('mitcsinal')[1]} image={require('./assets/eszt.png')} />
                <InfoPanel id="munkakor" type="sideBySide" title={getAnswer('munkakor')[0]} text={getAnswer('munkakor')[1]} image={require('./assets/eszt2.jpg')} />
                <InfoPanel id="ismeretek" type="sideBySide" title={getAnswer('ismeretek')[0]} text={getAnswer('ismeretek')[1]} image={require('./assets/eszt.png')} />
                <InfoPanel id="gyakorlat" type="sideBySide" title={getAnswer('gyakorlat')[0]} text={getAnswer('gyakorlat')[1]} image={require('./assets/eszt2.jpg')} />
                <CollectData />
            </>
        )
    }else{
        element = <FullscreenBanner title="Ez a szak nem létezik" />;
    }
    return element;
}

