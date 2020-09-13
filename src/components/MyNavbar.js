import React, {useState, useEffect} from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export const MyNavbar = () => {

    // lekéri milyen közel van a navbar a megadott elem aljához (0-1 közötti szám)
    const getNavbarOpacity = () => {
        const topBanner = document.getElementById('top-banner-container');
        if(topBanner == null || topBanner.getBoundingClientRect() == null){
            return 0;
        }else{
            const _value =  (window.innerHeight - document.getElementById('top-banner-container').getBoundingClientRect().bottom) / window.innerHeight;
            if(_value < 1.0){
                return Math.round((_value + Number.EPSILON) * 1000) / 1000;;
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
            <Navbar.Brand><Link to="/">Kandópage</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-snav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/rolunk">Rólunk</Link></Nav.Link>
                <NavDropdown title="Szakok" id="collasible-nav-dropdown">
                    <NavDropdown.Item><Link to="/szak1">Szak1</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/szak2">Szak2</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item><Link to="/szak3">Szak3</Link></NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2}>
                    <Link to="/something">Something</Link>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
