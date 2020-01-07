import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import HeroSp from './HeroSp';
import PortfolioSp from './PortfolioSp';
import AboutSp from './AboutSp';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/es/inicio" component={HeroSp} />
          <Route exact path="/es/portfolio" component={PortfolioSp} />
          <Route exact path="/es/sobre-mi" component={AboutSp} />
        </Switch>
      </div >
    )
  }
}
export default App;
