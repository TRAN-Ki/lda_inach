import React from 'react';
import Hero from "../Component/Hero/Hero";
import About from "../Component/About/About";
import Form from "../Component/Form/Form";


function Accueil(props) {

    return (
        <main className="accueil">
            <Hero/>
            <About />
                <Form />
        </main>
    );
}

export default Accueil;