import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import logo from './logo.svg';

import RsvpView from './pages/rsvp/rsvp';

import './App.scss';

class App extends Component {
  render() {
    const history = createBrowserHistory();

    return (
      <Router history={history}>
        <div className="App">
          <header className="App__header">
            <img src={logo} className="App__logo" alt="logo" />
            <h1 className="App__title">Welcome to React</h1>
          </header>

          <nav>
            <Link to="/rsvp">RSVP</Link>
          </nav>

          <div className="container">
            <Route exact path="/rsvp" component={RsvpView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
