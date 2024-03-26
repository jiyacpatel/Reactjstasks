import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email } = this.state;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(user) {
      return user.email === email;
    });
    if (user) {
        this.setState({ message: `Your password is: ${user.password}`, invalidEmail: false });
      } else {
        this.setState({ message: 'Invalid Email ID', invalidEmail: true });
      }
  }

  render() {
    return (
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        <form onSubmit={this.handleSubmit} className="forgot-password-form">
          <label className="forgot-password-label">
            Email:
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="forgot-password-input"/>
          </label>
          <button type="submit" className="forgot-password-button">Submit</button>
        </form>
        <div className={`forgot-password-message ${this.state.invalidEmail ? 'invalid-email' : ''}`}><b>{this.state.message}</b></div>
        <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
      </div>
    );
  }
}

export default ForgotPassword;
