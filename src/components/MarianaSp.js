import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import HeroSp from './HeroSp';
import PortfolioSp from './PortfolioSp';
import HeaderSp from './HeaderSp';
import Footer from './Footer';


class MarianaSp extends React.Component{

    render(){
        return(
            <React.Fragment>
                <HeaderSp />
                <main className="main">
                    {this.props.children}
                </main>
                <Footer />
            </React.Fragment>
        
        )
    }
}

export default MarianaSp
