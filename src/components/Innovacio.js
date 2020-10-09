import React from 'react';
import {Link} from "react-router-dom";
import { Box } from './Box';

export const Innovacio=(props)=>{
    //console.log("innovacio"+props.kepek.length)
    //const teszt = ['asd','asd2'];
    return (
        <div className="row justify-content-center" /*className="row"*/>
            {
                props.kepek.map((i,index)=>{
                //teszt.map((i,index)=>{
                    return(
                        /*<div className="col">
                            <div class="thumbnail">
                                <Link to={"/innovacio/" + i[1].kod}>      
                                    <img src={i[0]} alt="kep1" style={{width:"100%"}} />
                                    <div class="caption">
                                        <h2>{i[1].nev}</h2>
                                    </div>
                                </Link>  
                            </div>              
                        </div>*/
                        <Box key={index} hatlap={
                            <img src={require('./assets/innovacio/' + i[1].kod + '/logo.png')} alt="kep1" style={{width:"50%"}} />
                        } id={"box"+index} adatok={
                            <React.Fragment>
                                <h2>{i[1].nev}</h2>
                                <Link to={"/innovacio/" + i[1].kod}>
                                    <p>Tovább...</p>
                                </Link>  
                            </React.Fragment>
                        } />
                    )
                })
            }
        </div> 
    )   
}
