import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user: user});
    this.setState({
      username: this.state.username,
      password: ''
    });
  }

  updateField(field) {
    return (e) => (
      this.setState({[field]: e.target.value})
    );
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn){
      this.props.router.push('/');
    }
  }

  renderSignInErrors() {
    // debugger
    if (this.props.errors.session.length>0) {
      return (
        <ul>Errors:
          {this.props.errors.session.map( (error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  }

  renderSignUpErrors() {
    // debugger
    if (this.props.errors.user.length>0) {
      return (
        <ul>Errors:
          {this.props.errors.user.map( (error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      );
    } else {
      return;
    }
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>{this.props.formType}</h2>
        {this.renderSignInErrors()}
        {this.renderSignUpErrors()}
        <label>username
          <input type='text' onChange={this.updateField('username')} value={this.state.username}></input>
        </label>
        <br/>
        <label>password
          <input type='password' onChange={this.updateField('password')} value={this.state.password}></input>
        </label>
        <br/>
        <button type='submit'>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
