import React from 'react'
import "../styles/StartPage.scss";
import logo from "../assets/img/logo.png";

import Footer from '/Footer';
function StartPage() {
    return (
        <>
            <div className='start'>
                <img src={logo} alt='Logo' />
                <h1>Card Game</h1>
                <div className='difficultyLevels'>
                    <Button> Easy</Button>
                    <Button>Medium</Button>
                    <Button>Hard </Button>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default StartPage