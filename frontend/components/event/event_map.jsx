import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

let mapOptions = {
  center: {
    lat: 40.745239,
    lng: -73.993972
  },
  zoom: 13
};


class EventMap extends React.Component {
  componentDidMount() {
    if (navigator.geolocation) {
      let ctxt = this;
      navigator.geolocation.getCurrentPosition(function(position){
        let crds = position.coords;
        mapOptions.center.lat = crds.latitude;
        mapOptions.center.lng = crds.longitude;
        ctxt.setupMap();
      });
    }
   this.setupMap();
  }

  setupMap(){
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.createCurrentPositionMarker(mapOptions.center);
    if (this.props.singleEvent) {
      this.props.fetchEvent(this.props.eventId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.events);
    }
  }

  componentDidUpdate() {
    if (this.props.singleEvent) {
      const targetEventKey = Object.keys(this.props.events)[0];
      const targetEvent = this.props.events[targetEventKey];
      this.MarkerManager.updateMarkers([targetEvent]);
    } else {
      this.MarkerManager.updateMarkers(this.props.events);
    }
  }
  //
  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      // this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(event) {
    this.props.history.push(`events/${event.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'events/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div className="map" ref="map">
        Map
        Test
      </div>
    );
  }
}

export default withRouter(EventMap);
