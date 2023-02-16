import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom";
import Accueil from "../../Page/Accueil";
import Service from "../../Page/Service";
import "./navmenue.css"
import Presentation from "../../Page/Presentation";

function Navemenue(props) {
    return (
        <header>
            <div>
            <nav className="nav-bar navbar navbar-expand-lg">
                <div className="container-fluid">
                    <NavLink className= 'ms-3 nav-img d-flex align-items-center' to='/'><img src={require('../../Assets/logo-inach.png')} /></NavLink>
                    <div className="me-5">
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 justify-content-right'>
                            <li className="nav-item"><NavLink className='nav-items' to='/'>Accueil</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-items' to='/service'>Services</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-items' to='/presentation'>Qui sommes-nous</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-items contact' to='/contact'>Faire un devis</NavLink></li>
                        </ul>
                    </div>
                </div>
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