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
    this.demoLoginClick = this.demoLoginClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.loggedIn) {
    this.props.history.push('/');
  }
}

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    debugger
    e.preventDefault();

    // const user = this.state;
    // this.props.processForm({user});
  }

  demoLoginClick(e){
    e.preventDefault();
    this.setState ({email: 'guest'});
    this.setState({ password: 'passpass'});
    const user = this.state;
    this.props.processForm({user});

  }

  loginClick(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderDemologin(){
    if (this.props.formType === 'login' ){
      return(<li>
          <button onClick={this.demoLoginClick} id="demoLogin" >Demo Login</button>
      </li>);
    }
  }

  renderErrors() {

    if (this.props.errors) {

      return(
        <ul className="errors">
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
                  <button onClick={this.loginClick} id="login" >{buttonText}</button>
              </li>
                    {this.renderDemologin()}

            </ul>
          </fieldset>
        </form>
      </section>
      </div>
    );
  }
}
export default withRouter(SessionForm);
