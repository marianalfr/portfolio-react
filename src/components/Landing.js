import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <main class="main__landing">
            <div class="main__landing-logo">
                <Logo />
            </div>
            <div class="landing__language-selection">
                <Link to="/es/inicio">
                    <p class="hello-sp">Hola</p>
                </Link>
                <p class="hello-dot">·</p>
                <p class="hello-en">Hello</p>
            </div>
        </main>
    );
}

export default Landing;