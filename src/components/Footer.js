import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Footer.css';
import { MyParallax } from './MyParallax';

export const Footer=(props)=> {
    return(
        <div>
            <div id="pre-footer">
                {/*<p>Talán valami szöveg a footer előtt</p>*/}
                <MyParallax img={props.bgimage} amount={0.5} sizeToContent={true}>
                    <img className="foot-fade" src={require('./assets/fade.png')} alt="Footer előtti kép mögötti kép" />
                    <img src={require('./assets/footer.png')} alt="Footer előtti kép" />
                </MyParallax>
            </div>
            <div id="footer">
                <Row className="footer-row-first">
                    <Col lg={2}></Col>
                    <Col lg={4} className="footer-col footer-col-first">
                        <p><b>Kandó weboldal:</b><br/><a href="http://www.kkando.hu/" target="_blank" rel="noopener noreferrer">http://www.kkando.hu/</a></p>
                        <p><b>Székhely:</b><br/>{props.contactData.adress}</p>
                        <p><b>Levelezési cím:</b><br/>{props.contactData.adress}</p>
                        <p><b>Telefon:</b><br/>{props.contactData.tel}</p>
                        <p><b>OM azonosító:</b><br/>{props.contactData.omid}</p>        
                    </Col>
                    <Col lg={4} className="footer-col footer-col-second">
                        <p><b>E-mail:</b><br/>{props.contactData.email1}</p>
                        {/* <p>{props.contactData.name1} - {props.contactData.email1}</p>
                        <p>{props.contactData.name2} - {props.contactData.email2}</p>
                        <p>{props.contactData.name3} - {props.contactData.email3}</p> */}
                        <p style={{marginBottom:'0px'}}>Copyright &copy; KSZC Kandó 2016-2020. Minden&nbsp;Jog&nbsp;Fenntartva.</p>
                        <p style={{fontSize:'95%'}}>Weboldalt készítette: Kátay Magdolna, Varga Brigitta, Sata Erik</p>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
                {/*<Row className="footer-row-second">
                    <Col>
                        <p style={{marginBottom:'0px'}}>Copyright &copy; KSZC Kandó 2016-2020. Minden&nbsp;Jog&nbsp;Fenntartva.</p>
                        <p style={{fontSize:'95%'}}>Weboldalt készítette: Kátay Magdolna, Varga Brigitta, Sata Erik</p>
                    </Col>
                </Row>*/}
            </div>
        </div>
       )}