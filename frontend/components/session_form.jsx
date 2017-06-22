import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/session_actions';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      email: '',
      password: ''
    };
    this.renderErrors = this.renderErrors.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//   componentWillReceiveProps(nextProps) {
//   if (nextProps.loggedIn) {
//     this.props.history.push('/');
//   }
// }

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

  renderErrors() {


    let a = 0;
    if (this.props.errors) {

      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
}

  render() {

    const buttonText = this.props.formType === 'login' ? 'Log In' : 'Sign Up';
    return (
    <div className="login-wrapper">
      <section className="login" >

            <h2>{buttonText}</h2>
            <h6>Please enter your password to log in</h6>
           <ul>
             {}
           </ul>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <ul>
              <li>
                <label>
                  Email address
                </label>
                <input type="text" onChange={this.update("email")} value={this.state.email}/>
              </li>
              <li>
                <label>
                  Password:
                  </label>
                  <input onChange={this.update("password")}
                    value={this.state.password}
                    type="password"
                    />
              </li>
              <li>
                    {this.renderErrors()}
              </li>
              <li id="rememberMe">
                <input id="rememberMe" type="checkbox"></input>
                <label >Remember me</label>
              </li>
              <li>
                  <button>{buttonText}</button>
              </li>
              <li>
                  <a id="forgot_password" >Forgot password</a>
              </li>
            </ul>
          </fieldset>
        </form>
      </section>
      </div>
    );
  }
}
export default withRouter(SessionForm);
