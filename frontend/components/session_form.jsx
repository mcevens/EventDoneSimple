import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      email: '',
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
              <li id="rememberMe">
                <input id="rememberMe" type="checkbox"></input>
                <label for="rememberMe">Remember me</label>
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


const mapDispatchToProps = function(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;
    return {
      processForm: user => {
        return dispatch(processForm(user));
      },
      formType
    };
};

export default connect(null, mapDispatchToProps)(SessionForm);
