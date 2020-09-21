import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './InfoPanel.css';

export const InfoPanel = (props) => {
    let element = null;
    const rowClass = "info-row" + (props.className===undefined?null:(" "+props.className));
    switch(props.type){
        case 'sideBySide':
            element = (
                <Row className={rowClass}>
                    <Col lg={5} className="info-row-szoveg align-self-center">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col className="info-row-kep" style={{color:'red',backgroundImage:'url('+props.image+')'}}></Col>
                </Row>
            );
            break;
        case 'centerInfo':
            element = (
                <Row className={rowClass}>
                    <Col></Col>
                    <Col lg={5} className="info-row-szoveg info-row-kozep">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col></Col>
                </Row>
            );
            break;
        default:
            element = (
                <Row className={rowClass}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Row>
            );
            break;
    }
    return (
        <>
            {element}
        </>
    );
}
