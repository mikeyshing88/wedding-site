import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import asyncRoute from './components/async-route/async-route';

// Routes
import HomeRoute from './pages/home/home';
import RsvpRoute from './pages/rsvp/rsvp';

// Async routes
const RsvpPage = asyncRoute(() => RsvpRoute),
  HomePage = asyncRoute(() => HomeRoute);

const Routes = () => {
  return (
    <CSSTransitionGroup
      transitionName="fade-areas"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={150}
    >
      <Switch>
        <Route
          exact
          path="/"
          component={HomePage}
        />
        <Route
          exact
          path="/rsvp"
          component={RsvpPage}
        />
      </Switch>
    </CSSTransitionGroup>
  );
};

export default Routes;
