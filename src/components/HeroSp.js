import React from 'react';
import Typing from 'react-typing-animation';
import HeaderSp from './HeaderSp';
import Footer from './Footer';

class HeroSp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <HeaderSp />
                <main className="main">
                    <section id="hero" className="hero">
                        <div>
                        <Typing>
                            <p id="typewriter" className="hero__intro typewriter">Hola, soy Mariana. Soy arquitecta y diseñadora reconvertida en <strong>desarrolladora front-end</strong> gracias a <a className="link-cursive" href="https://adalab.es/" target="_blank" >Adalab</a>. Y estoy buscando trabajo.</p>
                        </Typing>
                        </div>
                    </section>
                </main>
                <Footer />
            </React.Fragment>
        )
    }
};

export default HeroSp;


