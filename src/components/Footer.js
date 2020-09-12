import React from 'react';

export const Footer=(props)=> {
    return(
        <div>
            <div className="card-group ">
                <div className="card ">
                    <div  className="card-footer text-muted"><small className="text-muted"><b>Székhely:</b>{props.contactData.location}</small></div>
                 </div>
                <div className="card">
                    <div className="card-footer text-muted lpc"><small className="text-muted"><b>Levelezési cím:</b>{props.contactData.adress}</small></div>
                </div>
                <div className="card">
                    <div className="card-footer text-muted lpc"><small className="text-muted"><b>Telefon:</b>{props.contactData.tel}</small></div>
                </div>
                <div className="card">
                    <div className="card-footer text-muted lpc"><small className="text-muted"><b>E-mail:</b>{props.contactData.email}</small></div>
                </div>
                <div className="card">
                    <div className="card-footer text-muted lpc"><small className="text-muted"><b>OM azonosító:</b>{props.contactData.omid}</small></div>
                </div>                
            </div>
        </div>
       )}