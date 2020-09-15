import React, { useState,useEffect } from 'react';    
import ReactCardFlip from 'react-card-flip'; 

export const Box=(props)=> {
    //const color = colors[Math.floor(Math.random() * 9)];
    const [isFlipped, setisFlipped] = useState(false);
  
   const handleClick=()=>{
      setisFlipped(!isFlipped)
    }
   
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div className="card col-md-3">
            {/*This is the front of the card.*/}
            {props.tema+" " +props.id}
            <button onClick={handleClick}>nézd meg</button>
          </div>
  
          <div className="card col-md-3">
            {/*This is the back of the card.*/}
            {props.adatok[props.id]}
            <button onClick={handleClick}>-</button>
          </div>
        </ReactCardFlip>
    );
  }
