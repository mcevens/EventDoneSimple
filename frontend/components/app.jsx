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
import EventFormContainer from './event/event_form_container';
import HomeIndex from './home_index';
import SessionFormContainer from './session_form_container';
import EventIndex from './event/event_index';
import EventIndexContainer from './event/event_index_container';
import EventShowContainer from './event/event_show_container';


const App = () => (
    <div>
      <Switch>
        <Route exact path="/" component={HomeIndex}/>
        <Route exact path="/events" component={EventIndexContainer}/>
        <Route exact path="/events/:eventId" component={EventShowContainer}/>
        <ProtectedRoute path="/create" component={EventFormContainer }/>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <AuthRoute path="/signup" component={SessionFormContainer}/>
      </Switch>
    </div>
);

export default App;
