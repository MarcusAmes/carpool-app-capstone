import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import RegisterFormContainer from './containers/RegisterFormContainer';
import HomePageContainer from './containers/HomePageContainer';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/home" component={HomePageContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
