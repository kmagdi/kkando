import React, {useState, useEffect} from 'react';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';

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
        <Navbar style={{opacity: navbarState}} className={navbarState==0?".d-none":null} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-snav">
                <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
