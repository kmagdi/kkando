import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';

const initScript = ()=>{
    //window.addEventListener('resize',onResize);
    window.addEventListener('beforeunload', () => {
        // scroll to top
        document.getElementsByTagName('html')[0].setAttribute('smooth','false');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        document.getElementsByTagName('html')[0].setAttribute('smooth','true')
    });
}

initScript();
ReactDOM.render(<App />, document.getElementById('root'));
