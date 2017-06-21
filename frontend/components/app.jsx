import React from 'react';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SessionForm from './session_form.jsx';
import EventForm from './event_form.jsx';
import HomeIndex from './home_index';


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={HomeIndex}/>
          <ProtectedRoute path="/create" component={EventForm }/>
        <AuthRoute path="/login" component={SessionForm}/>
        <AuthRoute path="/signup" component={SessionForm}/>
      </Switch>
    </div>
);

export default App;
