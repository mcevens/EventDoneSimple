import React from 'react';

export default class LocationPicker extends React.Component {
  constructor(props) {
    super(props);

    // optional props:
    // errors
    // location

    // required props:
    // handler({lat, lng, location})

    this.handler = this.props.handler;
  }

  componentDidMount() {
    this.setupAutocomplete();
  }

  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.autocomplete);
  }

  setupAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete(this.place);
    google.maps.event.addListener(this.autocomplete, 'place_changed', () => {
      const place = this.autocomplete.getPlace();
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      this.handler({lat, lng, location: this.place.value}, place);
    });
  }

  // <i className="fa fa-search" aria-hidden="true"></i>
  render() {
    return (
      <label>
        <input type="text" id="address-input"
          ref={ref => this.place = ref}
          placeholder={this.props.location || this.props.placeholder}
          className={this.props.errors && this.props.errors.lng ? 'invalid' : null}
        />
        <span className="errors" >{this.props.errors ? this.props.errors.lng : ''}</span>
      </label>
    );
  }

}
