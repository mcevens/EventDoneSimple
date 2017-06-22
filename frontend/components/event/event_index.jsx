import React from 'react';
import ReactDOM from 'react-dom';
import GlobalHeader from '../global_header';
import { connect } from 'react-redux';

class EventIndex  extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <section className="event-index">
        <GlobalHeader headerOrigin="event_index" />
          <div className="event-index-side-bar">
            <h1>It's working</h1>
          </div>
          <div className="event-index-content">
            <h1>It's working</h1>
          </div>
      </section>
    );
  }

}
const mapStateToProps = (state, ownProps) => {
  const InfoParams = ownProps.match.params;
  //debugger
  return ({
    InfoParams: InfoParams
  });
};

export default connect(
  mapStateToProps
)(EventIndex);
