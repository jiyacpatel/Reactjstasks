import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = this.state;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userIndex = users.findIndex(function(user) {
      return user.email === storedUser.email;
    });
    if (users[userIndex].password === oldPassword) {
      if (newPassword === confirmPassword) {
        users[userIndex].password = newPassword;
        localStorage.setItem('users', JSON.stringify(users));
        this.setState({ message: 'Password changed successfully!', success: true });
      } else {
        this.setState({ message: 'New password and confirm password do not match.', success: false });
      }
    } else {
      this.setState({ message: 'Old password is incorrect.', success: false });
    }
  };

  render() {
    return (
      <div className="change-password-container">
      <h2 className="change-password-heading">Change Password</h2>
      <form onSubmit={this.handleSubmit} className="change-password-form">
        <label className="change-password-label">
          Old Password:
          <input type="password" name="oldPassword" value={this.state.oldPassword} onChange={this.handleChange} className="change-password-input"/>
        </label>
        <label className="change-password-label">
          New Password:
          <input type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} className="change-password-input"/>
        </label>
        <label className="change-password-label">
          Confirm Password:
          <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} className="change-password-input"/>
        </label>
        <button type="submit" className="change-password-button">Change Password</button>
      </form>
      <div className={`change-password-message ${this.state.success ? 'success' : 'error'}`}>{this.state.message}</div>
      <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
    </div>
    );
  }
}

export default ChangePassword;
