import React from 'react';
import HeaderSp from './HeaderSp';
import Footer from './Footer';

class AboutSp extends React.Component{

    render(){
        return(
            <main className="main">
                <section id="about" className="about">
                    <div className="about__text">
                        <h2>Mi formación.</h2>
                        <p>En enero de 2020 termino el bootcamp de <a className="link-cursive" href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Adalab</a> para convertirme en <strong>desarrolladora front-end</strong>. ¡Por fin!. Ha sido una experiencia intensa y muy gratificante, aunque no ha sido mi primer contacto con el desarrollo de páginas web: en 2012-2013 hice un curso de html y css en <a className="link-cursive" href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a>, en Londres, que compaginaba con mi trabajo y en el que también vimos algo de javascript y ruby on rails.</p>
                        <p><strong>En febrero de 2012 me gradué como Arquitecta</strong> por la <a className="link-cursive" href="http://etsamadrid.aq.upm.es/" target="_blank" rel="noopener noreferrer">Escuela Técnica Superior de Arquitectura de Madrid</a> (ETSAM).</p> 
                        {/* <p>Entre otras muchas cosas, la carrera de Arquitectura alimentó mi curiosidad innata y tuve la oportunidad de explorar distintas áreas de creatividad. Se ha quedado grabada en mi memoria una frase de uno de mis profesores: "Un arquitecto ha de poseer un océano de conocimientos con un dedo de profundidad". Tal vez no sea algo de lo que enorgullecerse, pero es muy práctico a la hora de aprender qué es lo que a una le apasiona y adentrarse en ello sin miedo.</p> */}

                    </div>
                    <div className="about__text">
                        <h2>Mi experiencia profesional.</h2>
                        <p>Cuando terminé la carrera <strong>decidí marcharme a Reino Unido</strong>. En enero de 2013 empecé a trabajar en <a className="link-cursive" href="http://www.piphornestudio.com/" target="_blank" rel="noopener noreferrer">Pip Horne Studio</a>, una pequeña oficina de arquitectura en Londres, en la que tuve la inmensa suerte de coincidir con la artista <a className="link-cursive" href="http://www.shirazehhoushiary.com/" target="_blank" rel="noopener noreferrer">Shirazeh Houshiary</a>, pareja de mi jefe y para quien estuve trabajando <strong>casi 7 años</strong>: prácticamente desde los comienzos, hasta agosto de 2019.</p>
                        <p>Mi papel como 'project manager' era encargarme de la <strong>producción escultórica</strong> de la artista, desde el desarrollo inicial de ideación hasta la fabricación y la entrega de las piezas.</p> 
                        {/* <p>Mis herramientas de trabajo eran Rhinoceros 3D, Vectorworks, Artlantis Render, Photoshop, Illustrator, InDesign, y sobre todo mucha paciencia para lidiar con proveedores, fabricantes, galerías y demás intermediarios.</p> */}
                    </div>
                    <div className="about__text">
                        <h2>Mis proyectos personales.</h2>
                        <p>En la universidad estudié también diseño de mobiliario, y junto a varios compañeros fundamos un colectivo del que nació <strong>nuestro pequeño estudio: <a className="link-cursive" href="https://marianalfr.github.io/micomoler/" target="_blank" rel="noopener noreferrer">Micomoler</a></strong>. Compaginando el diseño con la carrera y posteriormente con el trabajo, conseguimos llevar nuestros productos a ferias de prestigio internacional como el <a className="link-cursive" href="https://www.salonemilano.it/en/" target="_blank" rel="noopener noreferrer">Salone del Mobile di Milano</a>, donde, en 2012, <strong>ganamos el segundo premio</strong> del <a className="link-cursive" href="https://www.salonemilano.it/en/exhibitions/salonesatellite" target="_blank" rel="noopener noreferrer">Satellite</a> por nuestro diseño 'elBotijo'.</p> 
                        <p>Además, durante todos estos años —tanto antes como después del primer curso de front-end—, <strong>he desarrollado varias páginas web de manera no profesional</strong>, con el fin de aprender y practicar algo que siempre me ha apasionado.</p>
                    </div>
                </section>
            </main>
        )
    }
};

export default AboutSp;