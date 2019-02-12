import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Splash} />
        </Switch>
      </div>
    );
  }
}

export default App;
