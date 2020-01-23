import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Pdf from '../documents/CV-Mariana-Lerma.pdf';

class HeaderSp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            openSection: ''
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.openSection = this.openSection.bind(this);
    };

    toggleMenu(){
        const { menuOpen } = this.state;

        if(!menuOpen){
            this.setState({
                menuOpen: true
            });
        } else {
            this.setState({
                menuOpen: false,
            });
        };
    };

    openSection(event){
        const target = event.target;

        this.setState({
            openSection: target.id
        })

        this.toggleMenu();

        console.log(target.id);
    }

    render() {
        return (
            <header className="header">
                <Link to={this.state.openSection === 'home' ? "/" : "/es/inicio"}>
                    <div id="home" className="header__logo" onClick={this.openSection}>
                        <Logo/>
                    </div>
                </Link>
                <nav className="header__nav">
                    <button id="btn-nav" className={`header__nav-button dots ${!this.state.menuOpen ? '' : ' on'}`} type="button" onClick={this.toggleMenu}><span></span></button>
                    <div className={`header__nav-wrapper ${!this.state.menuOpen ? '' : ' show-wrapper'}`}>
                        <ul id="nav" className={`header__nav-menu ${!this.state.menuOpen ? '' : ' show-menu'}`}>
                            <Link to="/es/portfolio"><li id="portfolio" onClick={this.openSection}>Portfolio.</li></Link>
                            <Link to="/es/sobre-mi"><li id="about" onClick={this.openSection}>Sobre mí.</li></Link>
                            {/* <li id="skills" onClick={this.openSection}>Habilidades.</li> */}
                            <a href = {Pdf} target = "_blank"><li id="skills" onClick={this.openSection}>CV.</li></a>
                            <Link to="/es/contacto"><li id="contact" onClick={this.openSection}>Contacto.</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    };
};

export default HeaderSp;