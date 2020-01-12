import React from 'react';

class ContactSp extends React.Component{
    render(){
        return(
            <section className="contact">
                <p>Puedes ponerte en contacto conmigo mandándome un e-mail o a través de mis redes sociales:</p>
                <div className="contact__social">
                    <a href="mailto:marianalfr@gmail.com?subject=Contacto a través de la web" target="_blank"><i className="footer-link fas fa-envelope"></i></a>
                    <a href="https://github.com/marianalfr" target="_blank"><i className="footer-link fab fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/mariana-lerma/" target="_blank"><i className="footer-link fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/MaLerFer" target="_blank"><i class="footer-link fab fa-twitter"></i></a>
                </div>
            </section>
        )
    }
}

export default ContactSp;