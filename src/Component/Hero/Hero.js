import React from 'react';
import "./hero.css"

function Hero(props) {
    return (
        <main>
            <div className="video-container">
                <video src={require('../../Assets/inachtrailer.mov')} controlsList="nodownload" controls autoPlay muted ></video>
            </div>
        </main>
    );
}

export default Hero;