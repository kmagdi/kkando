import React, { useState,useEffect } from 'react';     

export const Box=(props)=> {
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
     <div>
       <button className="btn btn-info m-2" onClick={showMe}><b>+</b>{props.tema+" " +props.id}</button>
       <div >{props.adatok[props.id]}</div>
     </div>
     
    );
  }
