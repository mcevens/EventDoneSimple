import React from 'react';
import {Provider} from 'react-redux';
import SessionForm from './session_form';
import { Route, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import App from './app';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default Root;
