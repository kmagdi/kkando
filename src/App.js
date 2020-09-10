import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom"
import {Szak1} from "./components/Szak1"
import {Szak2} from "./components/Szak2"
import {Szak3} from "./components/Szak3"
import {Home} from "./components/Home"
import {Navbar} from "./components/Navbar"



export const App=()=>{
    return(
        <BrowserRouter>
            <Navbar/>
                <Switch>
                    <Route  path="/" component={Home}/> 
                    <Route  path="/szak1" component={Szak1}/> 
                    <Route path="/szak2" component={Szak2}/>
                    <Route path="/szak3" component={Szak3}/>     
                </Switch>
        </BrowserRouter>
        
    )
}