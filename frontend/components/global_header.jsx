import React from 'react';
import { connect }  from 'react-redux';
import { Link }  from 'react-router-dom';
import { logout } from '../actions/session_actions';

const GlobalHeader = function({currentUser, logout}) {

  const signUpOrLogin = () => {
    if (currentUser) {
      return (
        <section >
          <div>
            <div className="currentUser">
               { currentUser.email }
            </div>
            <div>
              <ul>
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
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section >
          <Link to="/login">LOG IN</Link>
          <Link to="/signup">SIGN UP</Link>
        </section>
      );
    }
  };

  return (
    <header>
      {signUpOrLogin()}
      <Link to="/create">CREATE EVENT</Link>
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
