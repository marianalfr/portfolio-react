import React from 'react';
import projectsSp from '../data/projectsSp';
import projectsEn from '../data/projectsEn';

const Portfolio = props => {

    const renderProject = project => {
        return(
            <li key={project.name} className="portfolio__projects-project">
                <div className="project__cover" style={{backgroundImage: `url(${project.image})`}}>
                </div>
                <div className="project__info">
                    <h2 className="project__info-title">{project.name}</h2>
                    <p className="project__info-text">{project.description}</p>
                    <div className="project__info-links">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github-alt"></i>
                        </a>
                        <a href={project.pagesLink} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-desktop"></i>
                        </a>
                    </div>
                </div>
            </li>
        )
    };

    const renderProjectsSp = () => {
        return projectsSp.map(project => renderProject(project));
    };

    const renderProjectsEn = () => {
        return projectsEn.map(project => renderProject(project));
    };

    return(
        <main className="main">
            <section id="portfolio" className="portfolio">
                <div className="portfolio__wrapper">
                    <ul id="project-list-es" className="portfolio__projects">
                    { props.isLangSp ? 
                            (
                                renderProjectsSp()
                            ) : (
                                renderProjectsEn()
                            )
                        }
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Portfolio;