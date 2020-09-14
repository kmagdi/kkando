import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Szak} from "./components/Szak"
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

export const App=()=>{
    return(
        <ParallaxProvider>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route  exact path="/" component={Home}/> 
                    <Route  exact path="/kkando" component={Home}/> 
                    <Route exact path="/szak1"><Szak id={"1"}/></Route>    
                    <Route exact path="/szak2"><Szak id={"2"}/></Route>    
                    <Route path="/szak3" ><Szak id={"3"}/></Route>    
                </Switch>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
