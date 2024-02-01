import React from 'react';
import CTA from './cta';
import Social from './social'

import profile_picture from './images/profile-picture.jpg';
import './css/header.css'

class Header extends React.Component {
    render() {
        return(
            <header id="home">
                <div className="container header__container">
                    <h2>Hello I'm</h2>
                    <h1>Nilesh Mishra</h1>
                    <h2 className="text-light">MERN Stack Developer & Problem solver</h2>
                    <CTA />
                    <Social />

                    <a className="scroll__down" href="#contact">
                        Scroll Down
                    </a>

                    <div className="me">
                        <img src={profile_picture} alt="Profile" />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;