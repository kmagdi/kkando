import React, {useState, useEffect} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavHashLink as Link} from "react-router-hash-link"
import './MyNavbar.css'
import { Helper } from '../Helper';

export const MyNavbar = () => {
    // lekéri milyen közel van a navbar a megadott elem aljához (0-1 közötti szám)
    const getNavbarOpacity = () => {
        const topBanner = document.getElementById('top-banner-container');
        if(topBanner == null || topBanner.getBoundingClientRect() == null){
            return 0.0;
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
        window.addEventListener('scroll',()=>{
            // a navbar opacity statejét átállítja getNavbarOpacity()-re
            const opacity = getNavbarOpacity();
            setNavbarOpacity(opacity);
        });
    },[]);

    return (
        <Navbar style={{
            textDecoration: 'none',
            opacity: navbarState,
            display: navbarState===0?"none":"flex"
                }} collapseOnSelect expand="lg" variant="dark" fixed="top">
            <Link to="/" onClick={Helper.scrollToTop}>
                <Navbar.Brand>
                    <img src={require('./assets/logo.png')} height="30px" alt="Kandó logo" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-snav">
                <Nav className="mr-auto">
                    <Link to="/#iskola"><p className="nav-link link" role="button">Iskolánkról</p></Link>
                    <Link to="/#szakok"><p className="nav-link link" role="button">Szakok...</p></Link>
                    <Link to="/#dualis"><p className="nav-link link" role="button">Duális partnerek</p></Link>
                    <Link to="/#innovacio"><p className="nav-link link" role="button">Innovációk</p></Link>
                    <Link to="/#less-be-hozzank"><p className="nav-link link" role="button">Nézz be hozzánk!</p></Link>
                    <Link to="/#buszke"><p className="nav-link link" role="button">Akikre büszkék vagyunk</p></Link>
                    <Link to="/#footer"><p className="nav-link link" role="button">Elérhetőség</p></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
