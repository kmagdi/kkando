import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));
