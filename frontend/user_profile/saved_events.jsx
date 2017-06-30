import React from 'react';
import EventItemContainer from './event_item_container';
import { Link } from 'react-router';


export default class SavedEvents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { savedEvents, types, categories, bookmarks } = this.props;

    if (!Object.keys(savedEvents).length) {
      return (
        <div className="empty-item-image-container">
          <img src="http://res.cloudinary.com/dldbslv2a/image/upload/v1476208504/no_saved_w750rw.png"/>
          <h4>Saved events will show up here so you can easily view them here later.</h4>
          <Link to="/browse">discover events</Link>
        </div>
      );
    }

    let savedEventsList = Object.keys(savedEvents).map(key => {
      return savedEvents[key];
    });

    savedEventsList.sort((eventA, eventB) => {
      return eventA.start_date < eventB.start_date ? -1 : 1;
    });

    savedEventsList = savedEventsList.map(eventItem => {
      if (eventItem) {
        const type = types[eventItem.type_id];
        const typeName = type ? type.name : "";

        const category = categories[eventItem.category_id];
        const categoryName = category ? category.name : "";

        let bookmarkId = 0;
        Object.keys(bookmarks).forEach(k => {
          if (bookmarks[k].event_id === eventItem.id) {
            bookmarkId = bookmarks[k].id;
          }
        });

        return <EventItemContainer formType="bookmark"
                                   key={eventItem.id}
                                   eventItem={eventItem}
                                   typeName={typeName}
                                   categoryName={categoryName}
                                   helperId={bookmarkId} />;
      }
    });

    if (typeof savedEvents[Object.keys(savedEvents)[0]] === 'undefined') {
      savedEventsList = <div className="myprofile-event-item"></div>;
    }

    return (
      <div className="myprofile-event-lists-container">
        {savedEventsList}
      </div>
    );
  }
}
