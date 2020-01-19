import React from 'react';

class ContactSp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    render(){
        return(
            <section className="contact">
                {/* <p>Puedes ponerte en contacto conmigo mandándome un e-mail o a través de mis redes sociales:</p> */}
                <div className="contact__social">
                    <a href="mailto:marianalfr@gmail.com?subject=Contacto a través de la web" target="_blank" rel="noopener noreferrer"><i className="footer-link fas fa-envelope"></i></a>
                    <a href="https://github.com/marianalfr" target="_blank" rel="noopener noreferrer"><i className="footer-link fab fa-github-alt"></i></a>
                    <a href="https://www.linkedin.com/in/mariana-lerma/" target="_blank" rel="noopener noreferrer"><i className="footer-link fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/MaLerFer" target="_blank" rel="noopener noreferrer"><i className="footer-link fab fa-twitter"></i></a>
                </div>
                <p className="contact__text">Estoy accesible a través de mi correo electrónico, mis redes sociales, o de este formulario:</p>
                <form className="contact__form">
                    <div className="contact__form-details">
                        <div className="contact__form-details-input">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name"></input>
                        </div>
                        <div className="contact__form-details-input">
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" id="email" name="email"></input>
                        </div>
                    </div>
                    <div className="contact__form-text">
                        <label htmlFor="textarea">Mensaje:</label>
                        <textarea id="textarea" name="message"></textarea>
                    </div>
                    <input type="submit" value="enviar"></input>
                </form>
            </section>
        )
    }
}

export default ContactSp;