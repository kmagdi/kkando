import React, {useState, useEffect} from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './MyNavbar.css'

export const MyNavbar = () => {
    // lekéri milyen közel van a navbar a megadott elem aljához (0-1 közötti szám)
    const getNavbarOpacity = () => {
        const topBanner = document.getElementById('top-banner-container');
        if(topBanner == null || topBanner.getBoundingClientRect() == null){
            return 0;
        }else{
            const _value =  (window.innerHeight - document.getElementById('top-banner-container').getBoundingClientRect().bottom) / window.innerHeight;
            if(_value < 1.0){
                return Math.round((_value + Number.EPSILON) * 1000) / 1000;
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
    }

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
                <Link to="/rolunk" className="nav-link" role="button">Rólunk</Link>
                {/*<NavDropdown title="Szakok" id="collasible-nav-dropdown">
                    <Link to="/szak1" className="dropdown-item" role="button">Szak1</Link>
                    <Link to="/szak2" className="dropdown-item" role="button">Szak2</Link>
                    <NavDropdown.Divider />
                    <Link to="/szak3" className="dropdown-item" role="button">Szak3</Link>
                </NavDropdown>*/}
                <a href="#szakok" className="nav-link" role="button">Szakok</a>
                </Nav>
                <Nav>
                <Link to="/something" className="nav-link" role="button">Something</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
