import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
  }

  // componentDidMount() {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     this.setState({ user: JSON.parse(storedUser) });
  //   }
  // }

  componentDidMount() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const email = JSON.parse(storedUser).email;
      var users = JSON.parse(localStorage.getItem("users")) || [];
      var user = users.find(function(user) {
        return user.email === email;
      });
      if (user) {
        this.setState({ user });
      }
    }
  }

  render() {
    const { user } = this.state;

    return (
      <div className="home-container">
        <h2 className="home-heading">Hello {user ? user.username : ''}!</h2>
        {user && (
          <div className="home-user-info">
            <p><b>Email:</b> {user.email}</p>
            <p><b>Mobile Number:</b> {user.mobilenum}</p>
            <Link to="/change-password">
              <button className="home-button">Change Password</button>
            </Link>
            <Link to="/edit-profile">
              <button className="home-button">Edit Profile</button>
            </Link>
          </div>
        )}
         <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
      </div>
    );
  }
}

export default Home;
