import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Splash from './components/Splash';
import RegisterFormContainer from './containers/RegisterFormContainer';
import TopNavContainer from './containers/TopNavContainer';
import ProfilePage from './components/ProfilePage';
import MapPageContainer from './containers/MapPageContainer';


class App extends Component {
  //NOTE FIX NAME AND ROUTES
  render() {
    return (
      <div>
        <Route path="/cartool" component={TopNavContainer} />
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/register" component={RegisterFormContainer} />
          <Route exact path="/cartool/home" component={MapPageContainer} />
          <Route exact path="/cartool/profile/:id" component={ProfilePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
