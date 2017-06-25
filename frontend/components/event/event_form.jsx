import React from 'react';
import { withRouter } from 'react-router-dom';
import GlobalHeader from '../global_header';
import { DateField, Calendar } from 'react-date-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    let today = new Date();
    const now = moment().hour(0).minute(0);
    this.state = {
      title: '',
      adresse_line1: '',
      start_date: today,
      start_time: '',
      end_date: today,
      end_time: '',
      description: '',
      image_url: '',
      topic_id: 20,
      subtopic_id: 20
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.startTimeChange = this.startTimeChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.endTimeChange = this.endTimeChange.bind(this);
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
  }

  save(e){
    e.preventDefault();
    debugger
    const event = this.state;
    if (this.props.eventId) {
    this.props.editEvent(this.state)
      .then(data => this.props.history.push(`/`));
    }else{
    this.props.createEvent(this.state)
      .then(data => this.props.history.push(`/`));
    }
  }

  componentDidMount(){
    if (this.props.eventId){
      this.props.requestSingleEvent(this.props.eventId);
      const event = this.props.event;
      if (this.props.eventId) {
        this.setState({
          headerText: 'Edit Event',
          id: event.id
        });
      }
    }
  }

  startDateChange (dateString, { dateMoment, timestamp }){
    this.setState({
      start_date: dateString
    });
  }

  startTimeChange(value){
    this.setState({
      start_time: value.format("HH:mm")
    });
  }

  endDateChange(dateString, { dateMoment, timestamp}){
    this.setState({
      end_date: dateString
    });
  }

  endTimeChange(value){
    this.setState({
      end_time: value.format("HH:mm")
    });
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.eventId) {
      this.props.editEvent(this.state)
      .then(data => this.props.history.push(`/`));
    }else{
      this.props.createEvent(this.state)
      .then(data => this.props.history.push(`/`));
    }
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  errors(){
    if (this.props.errors) {
      return (
        this.props.errors.map(error => {
          return (<li className="error" key={error}>{error}</li>);
        })
      );
    }
  }

  render (){
    return (
      <div>
        <GlobalHeader />
        <section className="app">
          <div className="event-form">
            <div className="header">
              <div className="title">
                <header>
                  <h1>Create An Event</h1>
                </header>
                <div>
                  <button>
                    SAVE
                  </button>
                  <button>
                    PREVIEW
                  </button>
                  <button className="live-event">
                    MAKE EVENT LIVE
                  </button>
                </div>
              </div>
              <div className="action">
                <div>
                  <ul>
                    <li>
                    </li>
                    <li>
                      <a>EDIT</a>
                    </li>
                    <li>
                      <a>DESIGN</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="fields">
                <fieldset className="details">
                  <header>
                    <h2>
                      1
                    </h2>
                    <h2>Event Details</h2>
                  </header>
                  <section>
                    <div className="details-attr">
                      <label>Event Title</label>
                      <input
                        type="text"
                        value={this.state.title}
                        placeholder="Give it a Short distinct name"
                        onChange={this.update('title')}
                        />
                    </div>
                    <div className="details-attr">
                      <label>Location</label>
                      <input
                        type="text"
                        value={this.state.adresse_line1}
                        placeholder="Specify where it held."
                        onChange={this.update('adresse_line1')}
                        />
                    </div>
                    <div className="details-g-attr">
                      <div className="details-attr">
                        <label>Starts</label>
                          <DateField
                              dateFormat="YYYY-MM-DD"
                              date = {this.state.start_date}
                              onChange= {this.startDateChange}
                          />
                        <TimePicker showSecond={false}
                            onChange = {this.startTimeChange}
                           />
                      </div>
                      <div className="details-attr">
                        <label>Ends</label>
                        <DateField
                            dateFormat="YYYY-MM-DD"
                            date = {this.state.start_date}
                            onChange= {this.endDateChange}
                        />
                        <TimePicker
                          showSecond={false}
                          onChange={this.endTimeChange}
                          />

                      </div>
                    </div>
                    <div className="details-attr">
                      <label>Event Image</label>
                      <input type="text"></input>
                    </div>
                    <div className="details-attr">
                      <label>Event Description</label>
                      <textarea rows="9" cols="77">
                      </textarea>
                    </div>
                  </section>
                </fieldset>
                <fieldset className="tickets">
                  <header>
                    <h2 className="event-form-fields-header-icon">
                      2
                    </h2>
                    <h2>Create Tickets</h2>
                  </header>
                </fieldset>
                <fieldset className="additional">
                  <header>
                  </header>
                </fieldset>
              </div>
              <div className="actions">
                <h1>Nice Job!You're almost done.</h1>
                <div>
                    <button onClick={this.save}>
                      Save
                    </button>
                     <button className="live-event">
                       Make Your Event Live
                     </button>
                </div>
              </div>
            </div >
          </div>
        </section>
      </div>
    );
  }
}

export default (EventForm);
