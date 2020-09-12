import React from 'react'
import {MyParallax} from './MyParallax';
import img1 from './assets/eszt.png'
import logo from './assets/logo.png'

export const FullscreenBanner = ()=>{
    return (
        <MyParallax
            div="top-banner-container"
            img={img1}
            amount="0.15"
        >
            <img src={logo} id="welcome-image-logo" alt="logo" className="fade-in"></img>
        </MyParallax>
    );
};