import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Szak} from "./components/Szak"
import {Home} from "./components/Home"
import {MyNavbar} from "./components/MyNavbar"
import { ParallaxProvider, withController } from 'react-scroll-parallax'
import './App.css'

export const App=()=>{
    const parallaxController = (parallaxController) => {
        parallaxController.update();
    }
    return(
        <ParallaxProvider>
            <BrowserRouter>
                <MyNavbar/>
                <Switch>
                    <Route   exact path="/" component={Home}/> 
                    <Route exact  path="/kkando" component={Home}/> 
                    <Route path="/szak/:id" exact component={Szak} />   
                </Switch>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
