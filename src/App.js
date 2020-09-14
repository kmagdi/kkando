import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Szak1} from "./components/Szak1"
import {Szak2} from "./components/Szak2"
import {Szak3} from "./components/Szak3"
import {Home} from "./components/Home"
import {MyNavbar} from "./components/MyNavbar"
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

export const App=()=>{
    return(
        <ParallaxProvider>
            <BrowserRouter>
                <MyNavbar/>
                <Switch>
                    <Route  exact path="/" component={Home}/> 
                    <Route  exact path="/kkando" component={Home}/> 
                    <Route exact path="/szak1"><Szak1/></Route>    
                    <Route path="/szak2" component={Szak2}/>
                    <Route path="/szak3" component={Szak3}/>       
                </Switch>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
