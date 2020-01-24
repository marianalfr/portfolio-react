import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Landing = props => {

    const setLanguage = () => {
        props.setLanguage();
    };

    return (
        <main className="main__landing">
            <div className="main__landing-logo">
                <Logo />
            </div>
            <div className="landing__language-selection">
                <Link to="/home">
                    <p className="hello-sp">Hola</p>
                </Link>
                <p className="hello-dot">·</p>
                <Link to="/home">
                <p className="hello-en" onClick={setLanguage}>Hello</p>
                </Link>
            </div>
        </main>
    );
}

export default Landing;