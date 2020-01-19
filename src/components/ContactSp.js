import React from 'react';
import * as emailjs from 'emailjs-com';
import close from '../images/close.svg';

class ContactSp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            isSent: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name, email, message } = this.state;

        let templateParams = {
          user_name: name,
          user_email: email,
          message: message
        };

        emailjs.send(
          'gmail',
          'contact_form',
           templateParams,
          'user_lGsf2zDEqp30Y4HzUlYeH'
        )
        .then((result) => {
            console.log(result.text);
            this.setState({
                isSent: true
            })
        }, (error) => {
            console.log(error.text);
            this.setState({
                isSent: false
            })
        });

        this.resetForm();
    }

    resetForm(){
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    }

    handleClose(){
        this.setState({
            isSent: ''
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
                <form className="contact__form" onSubmit={this.handleSubmit}>
                    <div className="contact__form-details">
                        <div className="contact__form-details-input">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}></input>
                        </div>
                        <div className="contact__form-details-input">
                            <label htmlFor="email">E-mail:</label>
                            <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                        </div>
                    </div>
                    <div className="contact__form-text">
                        <label htmlFor="textarea">Mensaje:</label>
                        <textarea id="textarea" name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <input className="btn-send" type="submit" value="enviar"></input>
                </form>
                <div className={`contact__modal ${this.state.isSent === true ? '' : ' hidden'}`}>
                    <img src={close} alt="close" onClick={this.handleClose}/>
                    <h3>¡Recibido!.</h3>
                    <p>Gracias por ponerte en contacto conmigo, responderé lo antes posible.</p>
                </div>
                <div className={`contact__modal ${this.state.isSent === false ? '' : ' hidden'}`}>
                    <img src={close} alt="close" onClick={this.handleClose}/>
                    <h3>Ha habido un error.</h3>
                    <p>Por favor, inténtalo de nuevo o utiliza otra de las vías de contacto.</p>
                </div>
            </section>
        )
    }
}

export default ContactSp;