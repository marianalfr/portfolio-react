import React from 'react';
import Typing from 'react-typing-animation';

class Hero extends React.Component{

    constructor(props){
        super(props);
        this.renderTyping = this.renderTyping.bind(this);
    }

    renderTyping(){
        return(
            <Typing>
                { this.props.isLangSp ? 
                    (
                        <p id="typewriter" className="hero__intro typewriter">Hola, soy Mariana. Soy arquitecta y diseñadora reconvertida en <strong>desarrolladora front-end</strong> gracias a <a className="link-cursive" href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Adalab</a>. Y estoy buscando trabajo.</p>
                    ) : (
                        <p id="typewriter" className="hero__intro typewriter">Hi, I am Mariana, a qualified architect and designer that just became a <strong>front-end developer</strong> trained at <a className="link-cursive" href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Adalab</a>'s bootcamp. And I am currently looking for a job.</p>
                    )
                }
            </Typing>
        )
    }

    render(){
        return(
            <main className="main">
                <section id="hero" className="hero">
                    <div>
                        {this.renderTyping()}
                    </div>
                </section>
            </main>
        )
    }
};

export default Hero;


