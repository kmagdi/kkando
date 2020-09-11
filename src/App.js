import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Szak1} from "./components/Szak1"
import {Szak2} from "./components/Szak2"
import {Szak3} from "./components/Szak3"
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"

import {ParallaxProvider,ParallaxBanner} from 'react-scroll-parallax'
import img1 from './eszt.png'
import img2 from './eszt2.jpg'
import logo from './logo.png'

import { MyCarousel } from './components/MyCarousel';   

export const App=()=>{
    return(
        <div> {/* itt egyelőre csak felrakom az eddigi parallaxot */}
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" component={Home}/> 
                    <Route path="/szak1" component={Szak1}/> 
                    <Route path="/szak2" component={Szak2}/>
                    <Route path="/szak3" component={Szak3}/>     
                </Switch>
            </BrowserRouter>
            
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
                        <img src={logo} id="welcome-image-logo" className="fade-in"></img>
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

            <div className="row justify-content-center"><div className="col-md-6 m-2"><MyCarousel/></div></div>


        </div>
    )
}