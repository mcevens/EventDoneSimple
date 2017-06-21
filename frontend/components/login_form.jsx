import React from 'react';
import {connect} from 'react-redux';
import {login, signup} from '../actions/session_actions';

class LoginForm extends React.Component {
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
    const buttonText = 'Log In';
    return (
      <section >

        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input onChange={this.update("email")} value={this.state.email}/>
          </label>
          <label>
            Password:
            <input onChange={this.update("password")}
              value={this.state.password}
              type="password"
              />
          </label>
          <button>{buttonText}</button>
        </form>
      </section>
    );
  }
}


const mapDispatchToProps = function(dispatch, ownProps) {
  const formType = ownProps.location.pathname.slice(1);
    const processForm = login;
    return {
      processForm: user => {
        return dispatch(processForm(user));
      },
      formType
    };
};

export default connect(null, mapDispatchToProps)(LoginForm);
