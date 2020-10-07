import React, {useState, useRef} from 'react';
import {useIntersection} from 'react-use';
import {Row,Col} from 'react-bootstrap';
import gsap from 'gsap';
import './InfoPanel.css';
import { SphereView } from './SphereView';

export const InfoPanel = (props) => {
    const handleUndef = (prop,trueval,falseval) => {
        //const _trueval = (trueval===undefined?prop:trueval);
        //const _falseval = (falseval===undefined?'':falseval);
        //return (props[prop]===undefined?_trueval:_falseval);
        const propUndef = props[prop]===undefined;
        if(propUndef){
            if(trueval===undefined){
                return '';
            }else{
                return trueval
            }
        }else{
            if(falseval===undefined){
                return props[prop];
            }else{
                return falseval
            }
        }
    };

    const sectionRef = useRef(null);
    const [played,setPlayed] = useState(false);
    const intersection = useIntersection(sectionRef,{
        root:null,
        rootMargin:'0px',
        threshold:0.75
    });
    //const animFrom = props.from===undefined?{opacity:0,y:50,ease:'power4.out'}:props.from;
    const animFrom = handleUndef('from',{opacity:0,y:50,ease:'power4.out'},props.from);
    //const animTo = props.to===undefined?{opacity:1,y:0,ease:'power4.out',stagger:{amount:0.2}}:props.to;
    const animTo = handleUndef('from',{opacity:1,y:0,ease:'power4.out',stagger:{amount:0.2}},props.to);
    const animIn = (e)=>{
        gsap.fromTo(e,1,animFrom,animTo);
    };
    if(intersection && intersection.isIntersecting && !played){
        //console.log(intersection.intersectionRatio);
        animIn('.'+props.id);
        setPlayed(true);
    }

    let element = null;
    const rowClass = "info-row " + handleUndef('className');
    switch(props.type){
        case 'sideBySide':
            const margins = handleUndef('margin','',props.margin+'rem auto');
            element = (
                <Row id={props.id} ref={sectionRef} className={rowClass + " sidebyside" + (props.reverse===true?" reverse-order":"")} style={{marginTop:margins,marginBottom:margins}}>
                    <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </Col>
                    <Col className={"info-row-kep fade-int "+props.id+(props.clickable===undefined?'':' info-row-click')} style={{backgroundImage:'url('+props.image+')'}} onClick={(props.clickable===undefined?null:()=>{ window.open(props.image, '_blank') })}></Col>
                </Row>
            );
            break;
        case 'sideBySidePanorama':
            if(props.panoimg !== null){
                const margins2 = handleUndef('margin','',props.margin+'rem auto');
                element = (
                    <Row ref={sectionRef} className={rowClass + " sidebyside" + (props.reverse===true?" reverse-order":"")} style={{marginTop:margins2,marginBottom:margins2}}>
                        <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                            <h2>{props.title}</h2>
                            <p>{props.text}<span className="moretext">{props.moretext.map((i,index)=><React.Fragment key={'moretext'+index}><br/>{i}</React.Fragment>)}</span></p>
                        </Col>
                        <Col className={"info-row-kep info-row-panorama fade-int "+props.id}>
                            <SphereView id="1" image={props.panoimg} />
                        </Col>
                    </Row>
                );
                break;
            }
        case 'centerInfo':
            const height1 = handleUndef('height','auto',props.height);
            element = (
                <Row ref={sectionRef} id={props.id} className={rowClass} style={{minHeight:height1}}>
                    <Col className={"mobile-hidden"} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}></Col>
                    <Col lg={handleUndef('size',5,props.size)} className={"info-row-szoveg info-row-kozep row "+handleUndef('nomargin','',' m-0 p-4')} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}>
                        <div className={"col align-self-center"}>
                            {props.title===undefined?null:
                                <h2 className={"fade-int "+props.id}>
                                    {(props.bold === true ? (<b>{props.title}</b>):(props.title))}
                                </h2>
                            }
                            <p className={"fade-int "+props.id}>
                                {(props.bold === true ? (<b>{(props.quote===true?<span className="quote"><i>“{props.text}”</i></span>:props.text)}</b>):(props.quote===true?<span className="quote"><i>“{props.text}”</i></span>:props.text))}
                                <span className="quote-author">
                                    {(props.author===undefined?null:<>&nbsp;&nbsp;({props.author})</>)}
                                </span>
                            </p>
                        </div>
                    </Col>
                    <Col className={"mobile-hidden"} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}></Col>
                </Row>
            );
            break;
        case 'videoBg':
            let height2 = handleUndef('height','auto',props.height);
            element = (
                <Row ref={sectionRef} id={props.id} className={rowClass} style={{position:'relative',minHeight:height2}}>
                    <video
                        autoPlay
                        loop
                        muted
                        style={{
                            width:'100%',
                            height:'100%',
                            position:'absolute',
                            left:0,
                            top:0,
                            objectFit:'cover',
                            zIndex:-1
                        }}
                    >
                        <source style={{
                            width:'100%',
                            minHeight:height2,
                            objectFit:'cover'
                        }} src={props.bgvid} type="video/mp4" />
                    </video>
                    <Col className={"mobile-hidden"} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}></Col>
                    <Col lg={handleUndef('size',5,props.size)} className={"info-row-szoveg info-row-kozep row "+handleUndef('nomargin','',' m-0 p-4')} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}>
                        <div className={"col align-self-center"}>
                            <h2 className={"fade-int "+props.id}>{(props.bold === true ? (<b>{props.title}</b>):props.title)}</h2>
                            <p className={"fade-int "+props.id}>{(props.bold === true ? (<b>{props.text}</b>):props.text)}</p>
                        </div>
                    </Col>
                    <Col className={"mobile-hidden"} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}></Col>
                </Row>
            );
            break;
        default:
            element = (
                <Row ref={sectionRef} className={rowClass}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Row>
            );
            break;
    }
    return (
        <React.Fragment key={props.id}>
            {element}
        </React.Fragment>
    );
}
