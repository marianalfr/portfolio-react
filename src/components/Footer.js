import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__links-mobile">
                <div className="footer__links-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="footer__links-desktop">
                <div  id="footer-links" className="footer__links-desktop-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="footer__links-desktop-links">
                    <a href="mailto:marianalfr@gmail.com?subject=Contacto a través de la web" target="_blank"><i className="footer-link fas fa-envelope"></i></a>
                    <a href="https://github.com/marianalfr" target="_blank"><i className="footer-link fab fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/mariana-lerma/" target="_blank"><i className="footer-link fab fa-linkedin"></i></a>
                </div>
            </div>
            <div className="footer__dot">
                <div id="footer-dot" className="footer__dot-dot">
                    <span></span>
                </div>
                <div className="footer__dot-photo"></div>
            </div>
        </footer>
    );
}

export default Footer;