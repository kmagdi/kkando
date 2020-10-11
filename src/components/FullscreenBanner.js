import React, { useState, useEffect } from 'react'
import {MyParallax} from './MyParallax';

export const FullscreenBanner = (props)=>{
    const imageExists = props.image!==undefined;
    const titleExists = props.title!==undefined;
    useEffect(()=>{
        let img = new Image();
        img.src = props.image;
        img.onload = (i) => {
            updateImage();
            window.addEventListener('resize',()=>{updateImage();})
        }
    });
    const updateImage = () => {
        const obj = document.querySelector('#welcome-image-logo');
        if(obj !== null){
            const windowWidth = Math.round(window.innerWidth*0.9);
            if((obj.clientWidth+10) > windowWidth){
                obj.setAttribute('style','width:' + (windowWidth) + 'px;height:auto;');
                //console.log(1);
            }else{
                if(obj.clientWidth < obj.clientHeight){
                    obj.setAttribute('style','width:10rem;height:auto;');
                    //console.log(2);
                }else{
                    obj.setAttribute('style','height:10rem;width:auto;');
                    //console.log(3);
                }
            }
        }
        return '';
    };
    return (
        <MyParallax
            div="top-banner-container"
            img={props.bgimage===undefined?require('./assets/eszt.jpg'):props.bgimage}
            amount={0.15}
            height={'100vh'}
        >
            <div className="kozep">
                {imageExists?
                    <>
                        <img src={props.image} id="welcome-image-logo" alt="logo" className="fade-in-img"></img>
                    </>
                : null}
                {titleExists?
                    imageExists?
                        <p id="welcome-text" className="fade-in-p">{props.title}</p>
                    :
                        <h1 id="welcome-title" className="fade-in-h">{props.title}</h1>
                : null}
            </div>
            {updateImage()}
        </MyParallax>
    );
};
