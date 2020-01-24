import React from 'react';

class About extends React.Component{

    render(){
        return(
            <main className="main">
                { this.props.isLangSp ? 
                    (
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
                    ) : (
                        <section id="about" className="about">
                            <div className="about__text">
                                <h2>Education.</h2>
                                <p>In January 2020 I finished <a className="link-cursive" href="https://adalab.es/" target="_blank" rel="noopener noreferrer">Adalab</a>'s bootcamp to finally become a <strong>front-end developer</strong>. It was a very intense and rewarding experience. It was not my first time exploring web development though. In 2012-2013 I attended an html and css course at <a className="link-cursive" href="https://generalassemb.ly/" target="_blank" rel="noopener noreferrer">General Assembly</a>, in London, where I also learned a bit of javascript and ruby on rails.</p>
                                <p><strong>I became a Qualified Architect in February 2012</strong> after finishing my master's degree at <a className="link-cursive" href="http://etsamadrid.aq.upm.es/" target="_blank" rel="noopener noreferrer">Escuela Técnica Superior de Arquitectura de Madrid</a> (ETSAM).</p> 
                                {/* <p>Entre otras muchas cosas, la carrera de Arquitectura alimentó mi curiosidad innata y tuve la oportunidad de explorar distintas áreas de creatividad. Se ha quedado grabada en mi memoria una frase de uno de mis profesores: "Un arquitecto ha de poseer un océano de conocimientos con un dedo de profundidad". Tal vez no sea algo de lo que enorgullecerse, pero es muy práctico a la hora de aprender qué es lo que a una le apasiona y adentrarse en ello sin miedo.</p> */}
        
                            </div>
                            <div className="about__text">
                                <h2>Professional Experience.</h2>
                                <p>As soon as I finished uni <strong>I decided to move to the UK</strong>. In January 2013 I started to work at <a className="link-cursive" href="http://www.piphornestudio.com/" target="_blank" rel="noopener noreferrer">Pip Horne Studio</a>, a small architectural practice in London, where I had the amazing opportunity to meet artist <a className="link-cursive" href="http://www.shirazehhoushiary.com/" target="_blank" rel="noopener noreferrer">Shirazeh Houshiary</a>, my boss' wife. I moved on to work for her <strong>for about 7 years</strong>: from the very beginning to August 2019.</p>
                                <p>As a 'Project Manager' I was in charge of the artist's <strong>sculpture production</strong>. Developing all the stages of the process, from design to production and delivery.</p> 
                                {/* <p>Mis herramientas de trabajo eran Rhinoceros 3D, Vectorworks, Artlantis Render, Photoshop, Illustrator, InDesign, y sobre todo mucha paciencia para lidiar con proveedores, fabricantes, galerías y demás intermediarios.</p> */}
                            </div>
                            <div className="about__text">
                                <h2>Personal projects.</h2>
                                <p>At uni I also studied furniture design. This led me to set up a design collective with a few classmates, and later on some of us founded <strong>our small studio: <a className="link-cursive" href="https://marianalfr.github.io/micomoler/" target="_blank" rel="noopener noreferrer">Micomoler</a></strong>. Our designs have been showcased at some of the best-known international design fairs and exhibitions, such as <a className="link-cursive" href="https://www.salonemilano.it/en/" target="_blank" rel="noopener noreferrer">Salone del Mobile di Milano</a>, where, in 2012, <strong>we were awarded the second prize</strong> in the <a className="link-cursive" href="https://www.salonemilano.it/en/exhibitions/salonesatellite" target="_blank" rel="noopener noreferrer">Satellite</a> for our design 'elBotijo'.</p> 
                                <p>Whith the aim of learning and practicing —and sometimes just for fun— <strong>I have also designed and developed a few non-professional websites</strong> both before and after my first front-end course.</p>
                            </div>
                        </section>
                    )
                }
                
            </main>
        )
    }
};

export default About;