import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {HashRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
initScript();
ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));

function initScript(){
    //window.addEventListener('resize',()=>window.location.reload());
    window.addEventListener('beforeunload', () => {
        // scroll to top
        document.getElementsByTagName('html')[0].setAttribute('smooth','false');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementsByTagName('html')[0].setAttribute('smooth','true')
    });
}
