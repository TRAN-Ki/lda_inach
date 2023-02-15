import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";
import Accueil from "../Page/Accueil";
import Service from "../Page/Service";
import "./navmenue.css"
import Presentation from "../Page/Presentation";

function Navemenue(props) {
    return (
        <header>
            <div>
            <nav className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <NavLink className= 'nav-img d-flex align-items-center' to='/'><img src={require('../Assets/logo-inach.png')} /></NavLink>
                <ul>
                    <li><NavLink className= 'nav-items' to='/'>Accueil</NavLink></li>
                    <li><NavLink className= 'nav-items' to='/service'>Services</NavLink></li>
                    <li><NavLink className= 'nav-items' to='/presentation'>Qui sommes-nous</NavLink></li>
                    <li><button> Faire un devis</button></li>
                </ul>

            </nav>
            </div>
            <Routes>
                <Route path="/" element={<Accueil/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/presentation" element={<Presentation/>}/>
            </Routes>
        </header>
    );
}

export default Navemenue;