import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import HeroSp from './HeroSp';
import PortfolioSp from './PortfolioSp';
import AboutSp from './AboutSp';
import HeaderSp from './HeaderSp';
import MarianaSp from './MarianaSp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route render={routerProps => (
            <MarianaSp>
              <Route exact path="/es/inicio" component={HeroSp} />
              <Route exact path="/es/portfolio" component={PortfolioSp} />
              <Route exact path="/es/sobre-mi" component={AboutSp} />
              <Route exact path="/es/contacta" component={ContactSp} />
            </MarianaSp>
          )} />
        </Switch>
      </div >
    )
  }
}
export default App;
