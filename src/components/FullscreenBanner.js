import React from 'react'
import {MyParallax} from './MyParallax';

export const FullscreenBanner = ()=>{
    return (
        <MyParallax
            div="top-banner-container"
            img={require('./assets/eszt.png')}
            amount={0.15}
            height={'100vh'}
        >
            <div className="kozep">
                <img src={require('./assets/logo.png')} id="welcome-image-logo" alt="logo" className="fade-in-img"></img>
                <p id="welcome-text" className="fade-in-p">Lorem ipsum dolor sit amet.</p>
            </div>
        </MyParallax>
    );
};