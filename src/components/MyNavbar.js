import React, {useState, useEffect} from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './MyNavbar.css'

export const MyNavbar = () => {
    // lekéri milyen közel van a navbar a megadott elem aljához (0-1 közötti szám)
    const getNavbarOpacity = () => {
        const topBanner = document.getElementById('top-banner-container');
        if(topBanner == null || topBanner.getBoundingClientRect() == null){
            return 1.0;
        }else{
            const _value =  (window.innerHeight - document.getElementById('top-banner-container').getBoundingClientRect().bottom) / window.innerHeight;
            if(_value < 1.0){
                if(_value > 0.05){
                    return Math.round((_value + Number.EPSILON) * 1000) / 1000;
                }else{
                    return 0.0;
                }
            }else{
                return 1.0;
            }
        }
    };
    // state az átlátszóságra
    const [navbarState, setNavbarOpacity] = useState(0);
    // az oldal betöltésekor rábindolja a scrollra az onAppScroll függvényt
    useEffect(()=>{
        window.addEventListener('scroll',onAppScroll);
    },[]);
    // a navbar opacity statejét átállítja getNavbarOpacity()-re
    const onAppScroll = () => {
        const opacity = getNavbarOpacity();
        setNavbarOpacity(opacity);
    };
    const scrollToId = (path, id) => {
        /*if(window.location.pathname == '/'){
            const el = document.getElementById(id);
            if(el != null){
                //el.scrollIntoView();
                window.location = path + '#' + id;
            }
        }else{
            window.location = path + '#' + id;
        }*/
        window.location = path + '#' + id;
    };

    return (
        <Navbar style={{
            textDecoration: 'none',
            opacity: navbarState,
            display: navbarState===0?"none":"flex"
                }} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Link to="/"><Navbar.Brand>
                {/*<Link to="/">Kandópage</Link>*/}
                <img src={require('./assets/logo.png')} height="30px" />
            </Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-snav">
                <Nav className="mr-auto">
                <p href="javascript:void(0);" onClick={()=>scrollToId('/','rolunk')} className="nav-link link" role="button">Rólunk</p>
                <p onClick={()=>scrollToId('/','szakok')} className="nav-link" role="button">Szakok</p>
                </Nav>
                <Nav>
                <Link to="/something" className="nav-link" role="button">Something</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}