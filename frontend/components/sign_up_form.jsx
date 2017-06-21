import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      email: this.props.email,
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  render() {
    const buttonText = 'Sign Up';
    return (
      <section >

        <form onSubmit={this.handleSubmit}>
           <ul>
             <li>
               <label>
                  Email address
               </label>
             </li>
             <li>
               <label>
                  {this.state.email}
               </label>
               <button>
                 Edit
               </button>
             </li>
             <li>
               <label>
                 First Name
               </label>
               <label>
                 Last Name
               </label>
             </li>
             <li>
               Password
             </li>
             <li>
               <input onChange={this.update("password")}
                 value={this.state.password}
                 type="password"
                 />
             </li>
             <li>
               <input type="checkbox">
                  Remember me
               </input>
             </li>
             <li>
               <button>{buttonText}</button>
             </li>
           </ul>
        </form>
      </section>
    );
  }
}


const mapDispatchToProps = function(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
    const processForm = signup;
    return {
      processForm: user => {
        return dispatch(processForm(user));
      },
      formType
    };
};

export default connect(null, mapDispatchToProps)(SessionForm);
