   
import React from 'react';
import {ParallaxProvider,ParallaxBanner} from 'react-scroll-parallax'
import img1 from './assets/eszt.png'
import img2 from './assets/eszt2.jpg'
import logo from './assets/logo.png'

export const MyParallax=()=>{
    return (
        <div>
 <ParallaxProvider>
            <div id="top-banner-container">
                <ParallaxBanner
                    className="parallax-panel"
                    layers={[
                        {
                            image: img1,
                            amount:0.15
                        }
                    ]}
                    style={{
                        height:'100vh'
                    }}
                >
                    <img src={logo} id="welcome-image-logo" alt="logo" className="fade-in"></img>
                </ParallaxBanner>
            </div>
            <div style={{backgroundColor:'#eee',width:'100%',height:'300px'}}></div>
            <ParallaxBanner
                className="parallax-panel"
                layers={[
                    {
                        image: img2,
                        amount:0.25
                    }
                ]}
                style={{
                    height:'100vh'
                }}
            ></ParallaxBanner>
            {/*<div style={{backgroundColor:'rgba(255,0,0,0.2)',height:'1000px'}}></div>*/}
        </ParallaxProvider>
    </div>
    )
}