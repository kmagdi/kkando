import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';
//initScript();
ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));

function initScript(){
    let vh = document.documentElement.clientHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh + 'px');
}
