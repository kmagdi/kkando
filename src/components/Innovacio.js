import React from 'react';
import {Link} from "react-router-dom";


export const Innovacio=(props)=>{
    console.log("innovacio"+props.kepek.length)

    return (<div className="row" id="innovacio" >    
          {
            props.kepek.map(i=>{
                           return(
                            <div className="col">
                                <div class="thumbnail">
                                <Link to={"/innovacio/" + i[1].kod}>      
                                     <img src={i[0]} alt="kep1" style={{width:"100%"}} />
                                     <div class="caption">
                                        <h2>{i[1].nev}</h2>
                                     </div>
                                 </Link>  
                                 </div>              
                            </div>
                            
                               )}
        )}
      
            </div> 
    )   
}
