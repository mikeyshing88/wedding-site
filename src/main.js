import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import 'assets/scss/index.scss';
import Routes from './routes';
import { store, history } from 'store/store';

import 'utils/polyfills';

ReactDOM.render(
  <div>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="wrapper">
          <Routes store={store} />
        </div>
      </ConnectedRouter>
    </Provider>
  </div>,
  document.getElementById('root')
);
