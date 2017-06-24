import React from 'react';
import { connect }  from 'react-redux';
import { Link }  from 'react-router-dom';
import { logout } from '../actions/session_actions';
import TopicHeaderListContainer from './topic/topic_header_list_container';

  const GlobalHeader = function(props) {

  const currentUser = props.currentUser;
  const logout = props.logout;
  const headerOrigin = props.headerOrigin;
  const panelUser = () => {
    if (currentUser) {
      return (
          <ul className="user-menu-dropdown">
            <li>
              <Link to="/signup">Tickets</Link>
            </li>
            <li>
              <Link to="/signup">Saved</Link>
            </li>
            <li>
              <Link to="/signup">Manage Events</Link>
            </li>
            <li>
              <Link to="/signup">Organizer Profile</Link>
            </li>
            <li>
            <Link to="/signup">Contacts</Link>

            </li>
            <li>
              <Link to="/signup">Account Settings</Link>

            </li>
            <li>
              <button id="logout-button" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
      );
    }
  };

  const login = () => {
    if (!currentUser){
      return (<li>
          <Link  to="/login">LOG IN</Link>
        </li>);
    }
  };

  const signUp = () => {
    if (!currentUser){
      return (<li>
          <Link to="/signup">SIGN UP</Link>
        </li>);
    }
  };

  const userInfo = () => {
    if (currentUser){
      return(<li className="login-menu">
        <a id="gear-dropdown-btn" href="#">{currentUser.email}</a>
        { panelUser() }
      </li>);
    }
  };

  const createEvent = () => {
    if (currentUser) {
      return (
        <li>
          <Link to="/create">CREATE EVENT</Link>
        </li>
      );
    }
  };

  const searchForEvent = () =>{

    if (headerOrigin !== 'home_index') {
      return (
        <div className="search_bar" >
           <img></img>
           <input placeholder="Search for events" type="text"></input>
          <TopicHeaderListContainer />
        </div>
      );
    }
  };

  return (
    <header>
      <div className="global-header">
        <nav>
          <div>
              <a className="logo">Eventdonesimple</a>
              { searchForEvent() }
          </div>
          <ul>
            <li>
              <Link to="/events">BROWSE EVENTS</Link>
            </li>
            <li>
              <a href="#">LEARN MORE</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>


            { login() }
            { signUp() }
            { userInfo() }
            { createEvent() }
          </ul>
        </nav>
      </div>
     </header>
  );
};

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
