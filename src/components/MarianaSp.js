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
                    <Switch>
                        <Route exact path="/es/inicio" component={HeroSp} />
                        <Route exact path="/es/portfolio" component={PortfolioSp} />
                    </Switch>
                </main>
                <Footer />
            </React.Fragment>
        
        )
    }
}

export default MarianaSp
