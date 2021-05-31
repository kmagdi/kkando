import React, {useState, useRef} from 'react';
import {useIntersection} from 'react-use';
import {Row,Col} from 'react-bootstrap';
import gsap from 'gsap';
import './InfoPanel.css';
import { SphereView } from './SphereView';
import { MosaicGallery } from './MosaicGallery';
import { NavHashLink as Link } from 'react-router-hash-link';

export const InfoPanel = (props) => {
    const handleUndef = (prop,trueval,falseval) => {
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
    const animFrom = handleUndef('from',{opacity:0,y:50,ease:'power4.out'},props.from);
    const animTo = handleUndef('from',{opacity:1,y:0,ease:'power4.out',stagger:{amount:0.2}},props.to);
    const animIn = (e)=>{
        gsap.fromTo(e,1,animFrom,animTo);
    };
    if(intersection && intersection.isIntersecting && !played){
        animIn('.'+props.id);
        setPlayed(true);
    }

    const callLogoSelect = (i)=>{
        props.onLogoSelect(i);
    };

    let element = null;
    const rowClass = "info-row " + handleUndef('className');
    switch(props.type){
        case 'sideBySide':
            const margins = handleUndef('margin','',props.margin+'rem auto');
            const titleExists = props.title!==undefined;
            const textExists = props.text!==undefined;
            element = (
                <Row key={props.id} id={props.id} ref={sectionRef} className={rowClass + " sidebyside" + (props.reverse===true?" reverse-order":"") + ((titleExists&&textExists)?'':' eq-sep')} style={{marginTop:margins,marginBottom:margins}}>
                    <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                        {(titleExists)?<h2>{props.title}</h2>:null}
                        {(textExists)?<p>{props.text}</p>:null}
                    </Col>
                    <Col className={"info-row-kep fade-int "+props.id+(props.clickable===undefined?'':' info-row-click')} style={{backgroundImage:'url('+(props.image==='szakmaszerkezet'?require('./assets/szakmaszerkezet.jpg'):props.image)+')'}} onClick={(props.clickable===undefined?null:()=>{ window.open(props.image==='szakmaszerkezet'?require('./assets/original_szakmaszerkezet.jpg'):props.image, '_blank') })}></Col>
                </Row>
            );
            break;
        case 'sideBySideLogos':
            const margins2 = handleUndef('margin','',props.margin+'rem auto');
            const titleExists2 = props.title!==undefined;
            const textExists2 = props.text!==undefined;
            const urlLogoDualis="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/dualis/"
            element = (
                <Row key={props.id} id={props.id} ref={sectionRef} className={rowClass + " sidebyside" + (props.reverse===true?" reverse-order":"") + ((titleExists2&&textExists2)?'':' eq-sep')} style={{marginTop:margins2,marginBottom:margins2}}>
                    <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                        {(titleExists2)?<h2>{props.title}</h2>:null}
                        {(textExists2)?<p>{props.text}</p>:null}
                    </Col>
                    <Col className={"info-row-kep fade-int "+props.id+(props.clickable===undefined?'':' info-row-click')} style={{backgroundImage:'url('+(props.image==='szakmaszerkezet'?require('./assets/szakmaszerkezet.jpg'):props.image)+')'}} onClick={(props.clickable===undefined?null:()=>{ window.open(props.image==='szakmaszerkezet'?require('./assets/original_szakmaszerkezet.jpg'):props.image, '_blank') })}>
                        <div className="logo-container">
                            <Row className="">
                                <Col className="top-row" style={{textAlign:'right'}}>
                                    <Link to="/#dualis">
                                        <img onClick={()=>callLogoSelect(0)} className="f-logo" src={urlLogoDualis+'DU1/logo_128.png'} alt="logo1" />
                                    </Link>
                                </Col>
                                <Col className="top-row" style={{textAlign:'left'}}>
                                    <Link to="/#dualis">
                                        <img onClick={()=>callLogoSelect(1)} className="f-logo" src={urlLogoDualis+'DU2/logo_128.png'} alt="logo2" />
                                    </Link>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="bottom-tow" style={{textAlign:'right'}}>
                                    <Link to="/#dualis">
                                        <img onClick={()=>callLogoSelect(2)} className="f-logo" src={urlLogoDualis+'DU3/logo_128.png'} alt="logo3" />
                                    </Link>
                                </Col>
                                <Col className="bottom-tow" style={{textAlign:'left'}}>
                                    <Link to="/#dualis">
                                        <img onClick={()=>callLogoSelect(3)} className="f-logo" src={urlLogoDualis+'DU4/logo_128.png'} alt="logo4" />
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            );
            break;
        case 'sideBySidePanorama':
            if(props.panoimg !== null){
                const margins2 = handleUndef('margin','',props.margin+'rem auto');
                element = (
                    <Row key={props.id} ref={sectionRef} className={rowClass + " sidebyside" + (props.reverse===true?" reverse-order":"")} style={{marginTop:margins2,marginBottom:margins2}}>
                        <Col lg={5} className={"info-row-szoveg align-self-center fade-int "+props.id}>
                            <h2>{props.title}</h2>
                            <p>{props.text}<span className="moretext">{props.moretext.map((i,index)=><React.Fragment key={'moretext'+index}>{(props.text===undefined||props.text==='')?null:<br/>}{i}</React.Fragment>)}</span></p>
                        </Col>
                        <Col className={"info-row-kep info-row-panorama fade-int "+props.id}>
                            <SphereView id={props.index} hely="gyakorlat helyszínének" image={props.panoimg} loadImage={props.loadImage} />
                        </Col>
                    </Row>
                );
                break;
            }
        case 'centerInfo':
            const height1 = handleUndef('height','auto',props.height);
            element = (
                <Row key={props.id} ref={sectionRef} id={props.id} className={rowClass} style={{minHeight:height1}}>
                    <Col className={"mobile-hidden"} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}></Col>
                    <Col lg={handleUndef('size',5,props.size)} className={"info-row-szoveg info-row-kozep row "+handleUndef('nomargin','',' m-0 p-4')} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}>
                        <div className={"col align-self-center"}>
                            {props.title===undefined?null:
                                <h2 className={"fade-int "+props.id}>
                                    {(props.bold === true ? (<b>{props.title}</b>):(props.title))}
                                </h2>
                            }
                            <p className={"fade-int "+props.id} style={(props.centered===true)?{textAlign:'center'}:null}>
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
        case 'centerInfoWide':
            const height3 = handleUndef('height','auto',props.height);
            element = (
                <Row key={props.id} id={props.id} className={rowClass} style={{minHeight:height3}}>
                    <Col className={"info-row-szoveg info-row-kozep row "+handleUndef('nomargin','',' m-0 p-4')} style={{backgroundColor:handleUndef('bgColor','',props.bgColor)}}>
                        <div className={"col align-self-center"}>
                            {props.title===undefined?null:
                                <h2 className={props.id}>
                                    {(props.bold === true ? (<b>{props.title}</b>):(props.title))}
                                </h2>
                            }
                            <div style={{overflow:'hidden'}}>{props.text}</div>
                        </div>
                    </Col>
                </Row>
            );
            break;
        case 'mosaicGallery':
            element = (
                <MosaicGallery key={props.id} animRef={sectionRef} id={props.id} className={rowClass} title={props.title} images={props.images} titles={props.titles}></MosaicGallery>
            );
            break;
        case 'videoBg':
            let height2 = handleUndef('height','auto',props.height);
            element = (
                <Row key={props.id} ref={sectionRef} id={props.id} className={rowClass} style={{position:'relative',minHeight:height2}}>
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
                <Row key={props.id} ref={sectionRef} className={rowClass}>
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </Row>
            );
            break;
    }
    return (
        <React.Fragment key={props.id+"-container"}>
            {element}
        </React.Fragment>
    );
}
