import React from 'react';
import './Footer.css';

export const Footer=(props)=> {
    return(
        <div>
            <div id="footer" className="row">
                <div className="col-lg-6 footer-col footer-col-first">
                    <p><b>Székhely:</b><br/>{props.contactData.location}</p>
                    <p><b>Levelezési cím:</b><br/>{props.contactData.adress}</p>
                    <p><b>Telefon:</b><br/>{props.contactData.tel}</p>
                    <p><b>E-mail:</b><br/>{props.contactData.email}</p>
                    <p><b>OM azonosító:</b><br/>{props.contactData.omid}</p>        
                </div>
                <div className="col-lg-6 footer-col footer-col-second" style={{textAlign:'center',fontSize:'125%'}}>
                    <p>Valami "középre" igazított szöveg</p>
                </div>
            </div>
        </div>
       )}