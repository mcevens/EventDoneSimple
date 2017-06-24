import React from 'react';
import { withRouter } from 'react-router-dom';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
      headerText: 'Create New Event',
      id: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (this.props.eventId){
      this.props.requestSingleEvent(this.props.eventId);
        const event = this.props.event;
      if (this.props.eventId) {
        this.setState({
          title: event.title,
          body: event.body,
          headerText: 'Edit Event',
          id: event.id
        });
      }
    }
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

  titleTextChanged(e){
    this.setState({ title: e.target.value });
  }

  bodyTextChanged(e){
     this.setState({ body: e.target.value });
  }

  render (){
    return (
      <section className="event-detail">
          <h2>{this.state.headerText}</h2>
        <ul>
          {this.errors()}
        </ul>
      <form className="event-form" onSubmit={this.handleSubmit}>
         <fieldset >
           <label>
             Title
               </label>
           <input
             type="text"
             value={this.state.title}
             placeholder="Title"
             onChange={this.update('title')}
           />
         <br></br>
          <label>
            Body
            </label>
           <input
             type="text"
             value={this.state.body}
             placeholder="Body"
             onChange={this.update('body')}
           />
         <br></br>
         <button>Submit</button>
         </fieldset>
        </form>
      </section>
    );
  }
}

export default (EventForm);
