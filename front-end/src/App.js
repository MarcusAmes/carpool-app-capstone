import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import RegisterFormContainer from './containers/RegisterFormContainer';
import HomePageContainer from './containers/HomePageContainer';
import TopNavContainer from './containers/TopNavContainer';
import ProfilePage from './components/ProfilePage';


class App extends Component {
  render() {
    return (
      <div>
        <Route path="/home" component={TopNavContainer} />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/home" component={HomePageContainer} />
          <Route exact path="/home/profile" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
