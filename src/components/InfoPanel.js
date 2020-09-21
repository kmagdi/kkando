import React, {useRef} from 'react';
import {useIntersection} from 'react-use';
import {Row,Col} from 'react-bootstrap';
import gsap from 'gsap';
import './InfoPanel.css';

export const InfoPanel = (props) => {
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:1
    });
    const animIn = ()=>{
        gsap.to(sectionRef.current,1,{
            opacity:1,
            y:0,
            ease:'power4.out'
        });
    };
    const animOut = ()=>{
        gsap.to(sectionRef.current,1,{
            opacity:0,
            y:50,
            ease:'power4.out'
        });
    };
    intersection && intersection.intersectionRatio < 1 ? animOut() : animIn();

    let element = null;
    const rowClass = "info-row" + (props.className===undefined?'':(" "+props.className));
    switch(props.type){
        case 'sideBySide':
            element = (
                <Row ref={sectionRef} className={rowClass + " sidebyside"}>
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
