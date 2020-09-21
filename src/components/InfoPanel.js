import React, {useState, useRef} from 'react';
import {useIntersection} from 'react-use';
import {Row,Col} from 'react-bootstrap';
import gsap from 'gsap';
import './InfoPanel.css';

export const InfoPanel = (props) => {
    const sectionRef = useRef(null);
    const [played,setPlayed] = useState(false);
    const intersection = useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.75
    });
    const animIn = (e)=>{
        gsap.fromTo(e,1,{
            opacity:0,
            y:50,
            ease:'power4.out'
        },{
            opacity:1,
            y:0,
            ease:'power4.out',
            stagger:{
                amount:0.2
            }
        });
    };
    if(intersection && intersection.isIntersecting && !played){
        //console.log(intersection.intersectionRatio);
        animIn('.'+props.id);
        setPlayed(true);
    }
    let element = null;
    const rowClass = "info-row" + (props.className===undefined?'':(" "+props.className));
    switch(props.type){
        case 'sideBySide':
            element = (
                <Row ref={sectionRef} className={rowClass + " sidebyside"}>
                    <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col className={"info-row-kep fade-int "+props.id} style={{backgroundImage:'url('+props.image+')'}}></Col>
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
