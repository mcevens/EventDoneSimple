import React from 'react';
import { withRouter } from 'react-router-dom';
import GlobalHeader from '../global_header';
import { DateField, Calendar } from 'react-date-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import TicketTableContainer from './ticket_table_container';
import TicketTable from './ticket_table';

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
      topic_id: 20,
      subtopic_id: 20,
      tickets: [],
      ticket_initial:"block",
      table_ticket:"block",
      tickets_array: [],
      tickets_list:{},
      hasTickets: 'block',
      noTickets: 'none',
      freeTicket: 0,
      PaidTicket: 0,
      DonationTicket: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.startTimeChange = this.startTimeChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
    this.endTimeChange = this.endTimeChange.bind(this);
    this.update = this.update.bind(this);
    this.save = this.save.bind(this);
    this.initialFreeTicketClick = this.initialFreeTicketClick.bind(this);
    this.initialPaidTicketClick = this.initialPaidTicketClick.bind(this);
    this.initialDonationTicketClick = this
                                  .initialDonationTicketClick.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  save(e){

    e.preventDefault();
    const event = this.state;
    if (this.props.eventId) {
    this.props.editEvent(this.state)
      .then(data => this.props.history.push(`/`));
    }else{
    //  this.props.createEvent(this.state)
    //   .then(data => this.props.history.push(`/`));
       let stringTickets = "";
      this.state.tickets.forEach(el => {
        stringTickets += el.name  + ',' + el.quantity.toString() + ';';
      });

      stringTickets = stringTickets.slice(0,-1);

      var formData = new FormData();
      debugger
      formData.append("event[title]", this.state.title);
      formData.append("event[start_date]", this.state.adresse_line1);
      formData.append("event[start_time]", this.state.start_date);
      formData.append("event[end_date]", this.state.start_time);
      formData.append("event[end_time]", this.state.end_time);
      formData.append("event[description]", this.state.description);
      formData.append("event[topic_id]", this.state.topic_id);
      formData.append("event[subtopic_id]", this.state.subtopic_id);
      formData.append("event[tickets]", stringTickets);
      formData.append("event[image]", this.state.imageFile);
      this.props.createEvent(formData, this.goBack);
    }
  }


  handleSubmit (e) {
    // var formData = new FormData();
    // formData.append("event[title]", this.state.title);
    // formData.append("event[start_date]", this.state.adresse_line1);
    // formData.append("event[start_time]", this.state.start_date);
    // formData.append("event[end_date]", this.state.start_time);
    // formData.append("event[end_time]", this.state.end_time);
    // formData.append("event[description]", this.state.description);
    // formData.append("event[image_url]", this.state.image_url);
    // formData.append("event[topic_id]", this.state.topic_id);
    // formData.append("event[subtopic_id]", this.state.subtopic_id);
    // formData.append("event[tickets]", this.state.tickets);
    // formData.append("event[image]", this.state.imageFile);
    // this.props.createEvent(formData, this.goBack);
  }

  goBack () {
    this.context.router.push("/");
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

  shouldComponentUpdate(newProps, newState){


    if (Object.keys(newProps).length === 0 && newProps.constructor === Object){
      if  (newProps.event.tickets !== this.state.tickets){
      this.mergeEventState(newProps.event);
      }
    }
    return true;

  }

  componentWillreceiveProps(nextProps){

    console.log("Men component lan wi baz");
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
  //



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
  initialFreeTicketClick(e){
    e.preventDefault();
    let currentKey = this.state.tickets_array.length + 1;

    let ticketItem = {
      key: currentKey,
      name : '',
      price: 0 ,
      type : 'FREE',
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

  }

  initialPaidTicketClick(){
    this.setState({
      ticket_initial:"none"
    });
  }

  initialDonationTicketClick(){
    this.setState({
      ticket_initial:"none"
    });
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
                          <button onClick={this.initialFreeTicketClick}>
                            FREE TICKET
                          </button>
                          <button onClick={this.initialPaidTicketClick}>
                            PAID TICKET
                          </button>
                          <button onClick={this.initialDonationTicketClick}>
                            DONATION
                          </button>
                        </div>
                      </div>
                  </div>
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
