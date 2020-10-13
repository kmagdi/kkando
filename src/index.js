import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import 'bootstrap/dist/css/bootstrap.min.css';   
import './index.css';
import {Helper} from './Helper'

var wasMobile = Helper.isMobile();

const initScript = ()=>{
    window.addEventListener('resize',()=>{
        if(Helper.isMobile() !== wasMobile){
            window.location.reload();
        }
    });
    window.addEventListener('beforeunload', () => {
        Helper.scrollToTop();
        document.cookie = 'prevSzak=0';
    });
}

initScript();
ReactDOM.render(<App />, document.getElementById('root'));
