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
import EventHome from './event/event_home_container';
import SessionFormContainer from './session_form_container';
import EventIndex from './event/event_index';
import EventIndexContainer from './event/event_index_container';
import EventShowContainer from './event/event_show_container';
import EventRegistrationContainer
            from './registration/event_registration_container';
import Maintenance from './event/maintenance';

const App = () => (
    <div>
      <Switch>

        <Route exact path="/" component={Maintenance}/>
        <Route exact path="/events" component={Maintenance}/>
        <Route exact path="/events/:eventId" component={Maintenance}/>
        <Route path="/register/:eventId"
                    component={Maintenance}/>
        <ProtectedRoute path="/create" component={Maintenance }/>
        <AuthRoute path="/login" component={Maintenance}/>
        <AuthRoute path="/signup" component={Maintenance}/>
      </Switch>
    </div>
);

export default App;
