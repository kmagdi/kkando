import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './InfoPanel.css';

export const InfoPanel = (props) => {
    let element = null;
    switch(props.type){
        case 'sideBySide':
            element = (
                <>
                    <Col lg={5} className="info-row-szoveg align-self-center">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col className="info-row-kep" style={{color:'red',backgroundImage:'url('+props.image+')'}}></Col>
                </>
            );
            break;
        case 'centerInfo':
            element = (
                <>
                    <Col></Col>
                    <Col lg={5} className="info-row-szoveg info-row-kozep">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col></Col>
                </>
            );
            break;
        default:
            element = (
                <>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </>
            );
            break;
    }
    return (
        <Row className={"info-row" + (props.className===undefined?null:(" "+props.className))}>
            {element}
        </Row>
    );
}
