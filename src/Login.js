import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {email, password,} = this.state;
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var user = users.find(function(user) {
      return user.email === email && user.password === password;
    });
    if (user) {
      document.getElementById("output").innerText = "Login successful!";
      document.getElementById("output").classList.remove("error");
      // localStorage.setItem('user', JSON.stringify(user)); 
      localStorage.setItem('user', JSON.stringify({ email: user.email }));
    } else {
      alert('Invalid EmailId or password');
      document.getElementById("output").innerText = "Invalid EmailId or password.";
      localStorage.removeItem('user');
      document.getElementById("output").classList.add("error");
    }
  }
  
  render() {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="login-form">
          <table>
            <tbody>
              <tr>
                <td>
                <label className="login-label"></label><b>Email</b>
                </td>
                <td>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange} className="login-input" />
                </td>
              </tr>
              <tr>
                <td>
                <label className="login-label">
            <b>Password:</b> </label>
                </td>
                <td>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="login-input" />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className="login-button">Login</button>
          <Link to="/forgot-password">
              <button>Forgot Password</button>
        </Link>
        </form>
        <div id="output" className="login-output"></div>
        <Link to='/home'>Home</Link>
        <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
      </div>
    );
  }
}

export default Login;