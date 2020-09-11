import React from 'react';
import {Link} from "react-router-dom"

export const Navbar=()=>{
  return (
    <nav className="navbar navbar-expand-sm navbar-dark  bg-dark">
        <img className="navbar-brand" src={require("./assets/ikon.ico")}  width="30"  alt="ikon" loading="lazy"/>
        <ul className="navbar-nav">
            <Link to="/">
                <li className="nav-link">Home</li>
            </Link>
            <Link to="/szak1">
                <li className="nav-link">Szak1</li>
            </Link>
            <Link to="/szak2">
                <li className="nav-link">Szak2</li>
            </Link>
            <Link to="/szak3">
                <li className="nav-link">Szak3</li>
            </Link>
            
        </ul>
    </nav>  
  );
}
