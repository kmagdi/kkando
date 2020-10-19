import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom"
import {Szak} from "./components/Szak"
import {Dualis} from "./components/Dualis"
import {FilterInnovacio} from "./components/FilterInnovacio"
import {Home} from "./components/Home"
import {MyNavbar} from "./components/MyNavbar"
import { ParallaxProvider } from 'react-scroll-parallax'
import './App.css'

const patchnotes = `<!--
    PATCH NOTES:
    - Added some extra styling (mostly for mobile)
    - Deleted the demon script (it made a user feel uneasy after finding several demons in his backyard)
    - Fixed the alignment of the cards
    - Nerfed Terjedelmes Csongor (he was simply too terjedelmes)
    - Made the background of the navbar blurry
    - Removed Herobrine
-->`;

export const App=()=>{
    return(
        <ParallaxProvider>
            <div id="patch-notes" dangerouslySetInnerHTML={{__html:patchnotes}} />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <MyNavbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/szak/:id" component={Szak} />
                    <Route exact path="/dualis/:id" component={Dualis} />
                    <Route exact path="/innovacio/:id" component={FilterInnovacio} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </ParallaxProvider>
    )
}
