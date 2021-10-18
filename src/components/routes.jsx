import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import BurgerBuilder from './burgerBuilder';
import Login from './login';
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <BurgerBuilder />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
