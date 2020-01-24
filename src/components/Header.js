import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Pdf from '../documents/CV-Mariana-Lerma.pdf';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            openSection: 'home'
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.openSection = this.openSection.bind(this);
        this.setLanguage = this.setLanguage.bind(this);
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
    }

    setLanguage(event){
        this.props.setLanguage();
        this.openSection(event);
    }

    render() {
        console.log(this.state.openSection);
        return (
            <header className="header">
                <Link to="/">
                    <div id="home" className="header__logo" onClick={this.openSection}>
                        <Logo/>
                    </div>
                </Link>
                <nav className="header__nav">
                    <button id="btn-nav" className={`header__nav-button dots ${!this.state.menuOpen ? '' : ' on'}`} type="button" onClick={this.toggleMenu}><span></span></button>
                    <div className={`header__nav-wrapper ${!this.state.menuOpen ? '' : ' show-wrapper'}`}>
                        <ul id="nav" className={`header__nav-menu ${!this.state.menuOpen ? '' : ' show-menu'}`}>
                            <Link to="/portfolio"><li id="portfolio" onClick={this.openSection}>Portfolio.</li></Link>
                            <Link to="/about"><li id="about" onClick={this.openSection}>{this.props.isLangSp ? 'Sobre Mí.' : 'About me.'}</li></Link>
                            {/* <li id="skills" onClick={this.openSection}>Habilidades.</li> */}
                            <a href = {Pdf} target = "_blank" rel="noopener noreferrer"><li id="skills" onClick={this.openSection}>CV.</li></a>
                            <Link to="/contact"><li id="contact" onClick={this.openSection}>{this.props.isLangSp ? 'Contacto.' : 'Contact.'}</li></Link>
                            <li id="language" onClick={this.setLanguage}>{this.props.isLangSp ? 'English.' : 'Español.'}</li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    };
};

export default Header;