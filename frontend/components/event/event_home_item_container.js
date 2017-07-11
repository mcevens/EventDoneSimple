import React from 'react';
import { connect } from 'react-redux';
import EventHomeItem from './event_home_item';
import { destroyEventBookmark, createEventBookmark }
        from '../../actions/event_bookmark_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    bookmark: state.bookmark
  };
};

const mapDispatchToProps = dispatch => {
  return {
    destroyEventBookmark: id => dispatch(destroyEventBookmark(id)),
    createEventBookmark: bookmark => dispatch(createEventBookmark(bookmark))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventHomeItem);
