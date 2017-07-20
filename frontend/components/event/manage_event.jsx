import React from 'react';
import ReactDOM  from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';
import ManageEventItemContainer from './manage_event_item_container';


class ManageEvent extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getUser(this.props.currentUser.id);
  }

  render() {
    let eventsData = [];
    const user = this.props.currentUser;
    if (user.events) {
      eventsData = user.events;
    }

    return(
        <div className="manage-event-wrapper">
          <GlobalHeader headerOrigin = "event_index" />
          <div className="manage-event">
              <div className="manage-event-header">
                 <h1>Manage event</h1>
              </div>
              <div className="manage-event-content">
                <div className="manage-event-search">

                </div>
                <div>
                    {eventsData.map(
                      event => <ManageEventItemContainer
                      key = {event.id}
                      current_user={this.props.currentUser}
                      event={event} />
                    )
                    }
                </div>
              </div>
          </div>

        </div>
    );
  }
}

export default ManageEvent;
