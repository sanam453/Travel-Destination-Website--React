import React from 'react'
import '../App.css';
import './HeroSection.css';
import { Button } from './Button';


function HeroSection() {
    return (
        <div className="hero-container">
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
            <Button 
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            >
                GET STARTED
            </Button>
            <Button 
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            >
                WATCH TRAILER <i className="far fa-play-cirlce"></i>
            </Button>
            </div>
        </div>
    )
}

export default HeroSection;
