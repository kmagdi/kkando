import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Footer.css';

export const Footer=(props)=> {
    return(
        <div>
            <div id="pre-footer">
                {/*<p>Talán valami szöveg a footer előtt</p>*/}
                <img src={require('./assets/footer.png')} />
            </div>
            <Row id="footer">
                <Col lg={2}></Col>
                <Col lg={4} className="footer-col footer-col-first">
                    <p><b>Székhely:</b><br/>{props.contactData.location}</p>
                    <p><b>Levelezési cím:</b><br/>{props.contactData.adress}</p>
                    <p><b>Telefon:</b><br/>{props.contactData.tel}</p>
                    <p><b>E-mail:</b><br/>{props.contactData.email}</p>
                    <p><b>OM azonosító:</b><br/>{props.contactData.omid}</p>        
                </Col>
                <Col lg={4} className="footer-col footer-col-second">
                    <p style={{marginBottom:'0px'}}>Copyright &copy; KSZC Kandó 2016-2020. Minden&nbsp;Jog&nbsp;Fenntartva.</p>
                    <p style={{fontSize:'95%'}}>Weboldalt készítette: embers</p>
                    <p></p>
                </Col>
                <Col lg={2}></Col>
            </Row>
        </div>
       )}