import React from 'react';
import {Link} from "react-router-dom";
import { Box } from './Box';

export const Innovacio=(props)=>{
    return (
        <div className="row justify-content-center">
            {
                props.kepek.map((i,index)=>{
                    return(
                        <Box key={index} hatlapImage={require('./assets/card-back-' + String(i[1].kod).toLowerCase() + '.png')} elolapImage={require('./assets/card-front-' + String(i[1].kod).toLowerCase() + '.png')} hatlap={
                            <img src={require('./assets/innovacio/' + i[1].kod + '/logo.png')} alt="kep1" style={{width:"50%"}} />
                        } id={"box"+index} adatok={
                            <React.Fragment>
                                <h2>{i[1].nev}</h2>
                                <Link to={"/innovacio/" + i[1].kod} className="darklink">
                                    <p><span className="read-more">Tovább</span></p>
                                </Link>
                            </React.Fragment>
                        } />
                    )
                })
            }
        </div> 
    )   
}
