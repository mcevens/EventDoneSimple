import React from 'react';
import { connect }  from 'react-redux';
import { Link }  from 'react-router-dom';
import { logout } from '../actions/session_actions';

const GlobalHeader = function(props) {
  const currentUser = props.currentUser;
  const logout = props.logout;

  const panelUser = () => {
    if (currentUser) {
      return (
        <li>
          <ul className="user-menu-dropdown">
            <li>
              Tickets
            </li>
            <li>
              Saved
            </li>
            <li>
              Manage Events
            </li>
            <li>
              Organizer Profile
            </li>
            <li>
              Contacts
            </li>
            <li>
              Account Settings
            </li>
            <li>
              <button onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </li>
      );
    }
  };

  const login = () => {
    if (!currentUser){
      return (<li>
          <Link to="/login">LOG IN</Link>
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
      return(<li>
        <a href="#">{currentUser.email}</a>
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

  return (
    <header>
      <div className="global-header">
        <nav>
          <a className="logo">Eventdonesimple</a>
          <ul>
            <li>
              <a href="#">BROWSE EVENT</a>
            </li>
            <li>
              <a href="#">LEARN MORE</a>
            </li>
            <li>
              <a href="#">HELP</a>
            </li>

            { panelUser() }
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

const mapStateToProps = state => {
  return {currentUser: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalHeader);
