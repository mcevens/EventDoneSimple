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
import CategoryEventsContainer from './categories/category_events_container';
import EventHome from './event/event_home_container';
import SessionFormContainer from './session_form_container';
import EventIndex from './event/event_index';
import EventIndexContainer from './event/event_index_container';
import EventShowContainer from './event/event_show_container';
import EventRegistrationContainer
            from './registration/event_registration_container';
import ModalContainer from './modal/modal_container';


const App = () => (
    <div>
      <ModalContainer/>
      <Switch>
        <Route exact path="/" component={EventHome}/>
        <Route exact path="/events" component={EventIndexContainer}/>
        <Route exact path="/events/:eventId" component={EventShowContainer}/>
        <Route path="/register/:eventId"
                    component={EventRegistrationContainer}/>
                  <Route exact path="/topics/:topicId" component={CategoryEventsContainer} />
        <ProtectedRoute path="/create" component={EventFormContainer }/>
        <AuthRoute path="/login" component={SessionFormContainer}/>
        <AuthRoute path="/signup" component={SessionFormContainer}/>
      </Switch>
    </div>
);

export default App;
