import React from 'react';
import projectsSp from '../data/projectsSp';
import HeaderSp from './HeaderSp';
import Footer from './Footer';

const PortfolioSp = () => {

    const renderProject = project => {
        return(
            <li key={project.name} className="portfolio__projects-project">
                <div className="project__cover" style={{backgroundImage: `url(${project.image})`}}>
                </div>
                <div className="project__info">
                    <h2 className="project__info-title">{project.name}</h2>
                    <p className="project__info-text">{project.description}</p>
                    <div className="project__info-links">
                        <a href={project.repoLink} target="_blank">
                            <i className="fab fa-github-alt"></i>
                        </a>
                        <a href={project.pagesLink} target="_blank">
                            <i className="fas fa-desktop"></i>
                        </a>
                    </div>
                </div>
            </li>
        )
    };

    const renderProjects = () => {
        return projectsSp.map(project => renderProject(project));
    };

    return(
        <React.Fragment>
            <HeaderSp />
            <main className="main">
                <section id="portfolio" className="portfolio">
                    <div className="portfolio__wrapper">
                        <ul id="project-list-es" className="portfolio__projects">
                            {renderProjects()}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default PortfolioSp;