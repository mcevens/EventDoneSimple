import React from 'react';
import { Link } from 'react-router';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllEvent();
    this.props.requestAllTopic();
    this.props.requestTickets(this.props.currentUser);
    this.props.requestBookmarks(this.props.currentUser);
  }

  render() {
    const { savedEvents } = this.props;

    const selected = pathname => (
      (this.props.location.pathname.endsWith(pathname)) ? "selected" : ""
    );

    return (
      <div>
        <div className="profile-header-list">
          <Link to="/profile/saved"
                className={`profile-header-tab ${selected("saved")}`}>
            <div className="profile-header-count">
              {Object.keys(savedEvents).length}
            </div>
            <div>
              saved events
            </div>
          </Link>
        </div>
        {this.props.children}
      </div>
    );
  }
}
