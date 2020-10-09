import React, { useState } from 'react';
import { InfoPanel } from './InfoPanel';
import csvToJSON from './csvToJSON';

export const Buszke = () => {
    const [buszkeCsvData,setBuszkeCsvData]=useState([])
    const[buszkeLoaded,setBuszkeLoaded]=useState(false)
    if(!buszkeLoaded){
        const url="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/buszke.csv"
        fetch(url)           
            .then(resp=>resp.text())
            .then(text=>{
                const adatokJSON=csvToJSON(text, ';')
                const filtered=adatokJSON.filter(obj=>obj.kep!==undefined&&obj.kep!=="")
                setBuszkeCsvData(filtered)
                console.log(filtered);
            },[])
        setBuszkeLoaded(true)
    }
    return (
        <>
            <InfoPanel id="buszke" type="mosaicGallery" title="Akikre büszkék vagyunk" images={buszkeCsvData.map((i,index)=>(require('./assets/buszke/' + i.kep)))} titles={buszkeCsvData.map((i,index)=>(i.cim))}></InfoPanel>
        </>
    );
}
