import React, { useState } from 'react';    
import ReactCardFlip from 'react-card-flip'; 
import './Box.css'

export const Box=(props)=> {
    const [isFlipped, setisFlipped] = useState(false);
  
    const handleClick=()=>{
      setisFlipped(!isFlipped)
    }
   
    return (
        <div onClick={handleClick} className="react-card-flip-container">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" infinite="true">
                <div style={{width:'100%',height:'100%',padding:'1rem',backgroundImage:'url('+props.hatlapImage+')'}}>
                    <div className="row justify-content-center" style={{height:'100%'}}>
                        <div className="col align-self-center">
                            {props.hatlap}
                        </div>
                    </div>
                </div>
                <div style={{width:'100%',height:'100%',padding:'1rem',backgroundImage:'url('+props.elolapImage+')'}}>
                    <div className="row justify-content-center" style={{height:'100%'}}>
                        <div className="col align-self-center">
                            {props.adatok}
                        </div>
                    </div>
                </div>
            </ReactCardFlip>
        </div>
    );
  }