import { connect } from 'react-redux';
import HomeSearch from './home_search';
import * as APIUtil from '../../util/event_util.js';

const mapStateToProps = state => {
  return { events: state.events };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchEvents: searchTerm =>
           dispatch(APIUtil.fetchSearchEvents(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeSearch);
