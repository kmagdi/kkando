import React, { useState,useEffect } from 'react';     

export const Box=({ word })=> {
    //const color = colors[Math.floor(Math.random() * 9)];
    const [visible, setVisible] = useState(true);
  
    function hideMe(){
      setVisible(false);
    }
    function showMe(){
        setVisible(true)
    }
  
    let style ={  border: "solid 1px black"};
if (!visible) style.display = "none";
  
    return (
      <div className="box" style={style}>
         <div className="center">ez a Box.js: ide kerulnenek a reszletesebb informaciok az excel tablazatba bevezetett adatok alapjan, szak azonositoja: {word}</div>
        <button className="button top-corner" onClick={hideMe}>-</button>
        <button className="button bottom-corner" onClick={showMe}>+</button>
      </div>
    );
  }
