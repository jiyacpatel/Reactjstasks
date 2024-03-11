import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        mobilenum: '',
      message: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, mobilenum } = this.state;
    const storedUser = JSON.parse(localStorage.getItem('user'));
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userIndex = users.findIndex(function(user) {
      return user.email === storedUser.email;
    });
    users[userIndex].username = username;
    users[userIndex].mobilenum = mobilenum;
    localStorage.setItem('users', JSON.stringify(users));
    this.setState({ message: 'Profile changed successfully!' });
    
    
  };

  render() {
    return (
        <div className="edit-profile-container">
          <h2 className="edit-profile-heading">Edit Profile</h2>
          <form onSubmit={this.handleSubmit} className="edit-profile-form">
            <label className="edit-profile-label">
              Name:
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="edit-profile-input"/>
            </label>
            <label className="edit-profile-label">
              Mobile no.:
              <input type="number" name="mobilenum" value={this.state.mobilenum} onChange={this.handleChange} className="edit-profile-input"/>
            </label>
            <button type="submit" className="edit-profile-button">Update</button>
          </form>
          <div className="edit-profile-message"><b>{this.state.message}</b></div>
          <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
        </div>
      );
  }
}

export default EditProfile;
