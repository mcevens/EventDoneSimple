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
import SessionFormContainer from './session_form_container';
import EventIndex from './event/event_index';


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={HomeIndex}/>
        <Route exact path="/events" component={EventIndex}/>
        <ProtectedRoute path="/create" component={EventForm }/>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <AuthRoute path="/signup" component={SessionFormContainer}/>
      </Switch>
    </div>
);

export default App;
