import React from 'react';
import { withRouter } from 'react-router-dom';
import { hashHistory } from 'react-router';
import GlobalHeader from '../global_header';
import { DateField, Calendar } from 'react-date-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import TicketTableContainer from './ticket_table_container';
import TicketTable from './ticket_table';
import { validateField, validateForm } from './validate';


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
      imageFile: null,
      topic_id: 0,
      subtopic_id: 20,
      tickets: [],
      ticket_initial:"block",
      table_ticket:"block",
      tickets_array: [],
      tickets_list:{},
      hasTickets: 'block',
      noTickets: 'none',
      pageTitle: 'Create An Event'
    };

    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.addTicketClick = this.addTicketClick.bind(this);
    this.topicSelectedIndexChanged = this.topicSelectedIndexChanged.bind(this);
  }

  save(e){

    e.preventDefault();
    const event = this.state;
    const isFormReady = validateForm(event);
    console.log(this.state.start_date);

    if (isFormReady) {
      if (this.props.eventId) {
      this.props.editEvent(this.state)
        .then(data => this.props.history.push(`/`));
      }else{
         let stringTickets = "";
        this.state.tickets.forEach(el => {
          stringTickets += el.name  + ',' + el.quantity.toString() + ';';
        });
        stringTickets = stringTickets.slice(0,-1);
        var formData = new FormData();

        formData.append("event[title]", this.state.title);
        formData.append("event[adresse_line1]", this.state.adresse_line1);
        formData.append("event[start_date]", this.state.start_date);
        formData.append("event[start_time]", this.state.start_time);
        formData.append("event[end_date]", this.state.end_date);
        formData.append("event[end_time]", this.state.end_time);
        formData.append("event[description]", this.state.description);
        formData.append("event[topic_id]", this.state.topic_id);
        formData.append("event[subtopic_id]", this.state.subtopic_id);
        formData.append("event[tickets]", stringTickets);
        formData.append("event[image]", this.state.imageFile);
        this.props.createEvent(formData).then((data) => {
          this.props.history.push(`/events/${data.id}`);
        });
      }
    }

  }

  componentDidMount(){

    const topics =   this.props.requestAllTopic();
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

  shouldComponentUpdate(newProps, newState){
    if (Object.keys(newProps).length === 0 &&
        newProps.constructor === Object){
      if  (newProps.event.tickets !== this.state.tickets){
      this.mergeEventState(newProps.event);
      }
    }
    return true;

  }

  componentWillreceiveProps(nextProps){
    if (this.props.singleEvent !== nextProps.singleEvent) {

     this.mergeEventState(nextProps.event);
    }
  }

  mergeEventState(event){
    let ticketArray = [];

    event.tickets_list.each(
      elem => {
        ticketArray.push(elem);
      }
    );

    this.setState({
      title: event.title,
      adresse_line1: event.adresse_line1,
      start_date: event.start_date,
      start_time: event.start_time,
      end_date: event.end_date,
      end_time: event.end_time,
      description: event.description,
      image_url: event.image_url,
      topic_id: event.topic_id,
      subtopic_id: event.subtopic_id,
      tickets: event.tickets,
      tickets_array: ticketArray,
      tickets_list:event.tickets_list
    });
  }

  updateFile (e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ imageFile: file, image_url: fileReader.result });
    }.bind(this);

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(property) {
    return e => {
      e.preventDefault();
      const value = e.currentTarget.value;
      if (property === "topic_id") {
      this.setState({ subtopic_id: 0 });
    }
      if(property === "title"){
        if(value === ''){
          this.setState({pageTitle: 'Create An Event'});
        }else{
          this.setState({pageTitle: value});
        }
      }
      validateField(property, value);
     this.setState({ [property]: e.target.value });
   };
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

  addTicketClick(property){
    return e => {
      e.preventDefault();
      let currentKey = this.state.tickets_array.length + 1;
      const type = e.currentTarget.value;

      let ticketItem = {
        key: currentKey,
        name : '',
        price: 0 ,
        type : property,
        quantity: 0
      };

      let tickets = this.state.tickets;
      let ticketArray = this.state.tickets_array;
      let ticketsList = this.state.tickets_list;
      ticketsList[currentKey] = ticketItem;
      ticketArray.push(currentKey);
      tickets.push(ticketItem);

      this.setState({
        tickets : tickets,
        tickets_array : ticketArray,
        tickets_list :ticketsList,
        hasTickets: 'none',
        noTickets: 'block'
      });

      this.setState({
        ticket_initial:"block",
        table_ticket: "block"
      });
   };
  }

  topicSelectedIndexChanged(e){
    this.setState({
      topic_id: e.target.value
    });
  }

  render (){
    const topicsData = this.props.topics;

    return (
      <div>
        <GlobalHeader />
        <section className="app">
          <div className="event-form-container">
            <div className="header">
              <div className="title">
                <header>
                  <h1>{this.state.pageTitle}</h1>
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
            <div className="event-form">

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
                        <input id="event-form-title"
                          type="text"
                          value={this.state.title}
                          placeholder="Give it a Short distinct name"
                          onChange={this.update('title')}
                          />
                          <span className="event-form-error"></span>
                      </div>
                      <div className="details-attr">
                        <label>Location</label>
                        <input id="address-input"
                          type="text"
                          value={this.state.adresse_line1}
                          placeholder="Specify where it held."
                          onChange={this.update('adresse_line1')}
                          />
                          <span className="event-form-error"
                            id="event-form-address-error"></span>
                      </div>
                      <div className="details-g-attr">
                        <div className="start-end-date">
                            <div className="date-zone">
                            <label>STARTS</label>
                              <div className="flex">
                                <div>
                                  <input type="date"
                                         id="event-form-start-date"
                                         className="date-picker"
                                         value={this.state.start_date}
                                         onChange={this.update("start_date")}/>
                                  <span className="event-form-error"></span>
                                </div>
                                <div>
                                  <input type="time"
                                         id="event-form-start-time"
                                         className="time-picker"
                                         step="60"
                                         value={this.state.start_time}
                                         onChange={this.update("start_time")}/>
                                  <span className="event-form-error"></span>
                                </div>
                              </div>
                            </div>
                            <div className="date-zone">
                              <label>ENDS</label>
                              <div className="flex">
                                <div>
                                  <input type="date"
                                         id="event-form-end-date"
                                         className="date-picker"
                                         value={this.state.end_date}
                                         onChange={this.update("end_date")}/>
                                  <span className="event-form-error"></span>
                                </div>
                                <div>
                                  <input type="time"
                                         id="event-form-end-time"
                                         className="time-picker"
                                         value={this.state.end_time}
                                         onChange={this.update("end_time")}/>
                                  <span className="event-form-error"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div className="details-attr">
                        <label>Event Image</label>
                        <input type="file" onChange={this.updateFile}></input>
                        <img src={this.state.image_url}/>
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
                    <div>

                      <div className="ticket_table_container"
                            style={{display:this.state.noTickets}}>
                          <TicketTable
                            updateEventState={this.props.updateEventState}
                            event={this.state} tickets={this.state.tickets_list}
                            ticket_array={this.state.tickets_array} />
                      </div>
                      <div style={{display:this.state.ticket_initial}}
                                className="initial-type-ticket">
                          <h5
                            style={{display:this.state.hasTickets}}>
                            What type of ticket would
                            you like to start with?</h5>
                          <div id="div_ticket_type">
                            <button onClick={this.addTicketClick("FREE")}>
                              FREE TICKET
                            </button>
                            <button onClick={this.addTicketClick("PAID")}>
                              PAID TICKET
                            </button>
                            <button onClick={this.addTicketClick("DONATION")}>
                              DONATION
                            </button>
                          </div>
                        </div>
                    </div>
                  </fieldset>
                  <fieldset className="additional">
                    <header>
                      <h2 className="event-form-fields-header-icon">
                        3
                      </h2>
                      <h2>Additional Settings </h2>
                    </header>
                    <section>
                      <div className="details-attr">
                        <label>Event Topic</label>
                        <select id="event-form-topic" onChange={this.update("topic_id")} >
                          <option disabled  selected value="0"> -- Select a topic -- </option>
                          {topicsData.map(
                            topic =>  <option value={topic.id}>{topic.name}</option>
                          )}
                        </select>
                        <span className="event-form-error"></span>
                      </div>
                    </section>
                  </fieldset>
                </div>

              </div >
            </div>
            <div className="actions">

              <div>
                  <h1>Nice job! You're almost done.</h1>
                  <button >
                    Save
                  </button>
                   <button onClick={this.save} className="live-event">
                     Make Your Event Live
                   </button>
              </div>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default (EventForm);
