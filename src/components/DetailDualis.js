import React, {useEffect} from 'react';

export const DetailDualis=(props)=>{
    console.log("a detailbol:"+props.adatok.kod)

    return(
       
        <div>
             <p>adatok....{props.adatok.kod}</p>
             <p>{props.adatok.nev}</p>
             <p>{props.adatok.link}</p>
             <p>{props.adatok.text1}</p>
            
             
        </div>
       
    )
}