import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from '../Login';
import Home from '../Home';
import Search from '../Search';

import authenticator from '../../authenticator';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticator.isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/login" 
            render={(routeProps) => (
              <Login authenticator={authenticator} {...routeProps} />
            )}
          />
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/search' component={Search} />
        </div>
      </Router>
    );
  }
}
