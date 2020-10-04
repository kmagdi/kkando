import React, {useEffect} from 'react';

export const DetailInnovacio=(props)=>{
    console.log("props"+Object.keys(props.adatok))
    console.log("props:"+props.adatok.kod)
    return(
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
    )
}