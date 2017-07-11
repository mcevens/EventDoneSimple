import React from 'react';
import { connect } from 'react-redux';
import EventIndexItem from './event_index_item';
import { destroyEventBookmark,  createEventBookmark }
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
)(EventIndexItem);
