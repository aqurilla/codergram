import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Login from './components/auth/login.component';
import Register from './components/auth/register.component';
import Alert from './components/layout/alert.component';
import Dashboard from './components/dashboard/dashboard.component';
import PrivateRoute from './components/routing/privateroute.component';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
