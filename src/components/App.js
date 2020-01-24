import React from 'react';
import '../styles/App.scss';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Hero from './Hero';
import Portfolio from './Portfolio';
import About from './About';
import Mariana from './Mariana';
import Contact from './Contact';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLangSp: true
    };
    this.setLanguage = this.setLanguage.bind(this);
  };

  setLanguage(){
    this.setState(prevState => ({
      isLangSp: !prevState.isLangSp
    }))
  }

  render() {
    console.log(this.state.isLangSp);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing
              setLanguage={this.setLanguage}
            />
          </Route>
          <Route render={routerProps => (
            <React.Fragment>
              <Mariana 
                setLanguage={this.setLanguage}
                isLangSp={this.state.isLangSp}
              >
                <Route exact path="/home">
                  <Hero
                    isLangSp={this.state.isLangSp}
                  />
                </Route>
                <Route exact path="/portfolio">
                  <Portfolio
                    isLangSp={this.state.isLangSp}
                  />
                </Route>
                <Route exact path="/about">
                  <About
                    isLangSp={this.state.isLangSp}
                  />
                </Route>
                <Route exact path="/contact">
                  <Contact
                    isLangSp={this.state.isLangSp}
                  />
                </Route>
              </Mariana>
            </React.Fragment>
          )} />
        </Switch>
      </div >
    )
  }
}
export default App;
