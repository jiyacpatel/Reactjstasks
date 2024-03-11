import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      mobilenum: '',
      errors: {}
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const { name, value } = event.target;

    if (name === 'username' && !/^[a-zA-Z]+$/.test(value)) {
      this.setState((prevState) => ({
        errors: {
          ...prevState.errors,
          [name]: 'Name can contain alphabets only',
        },
      }));
    } 
    else if (name === 'password') {
      // Check if the field is the password and validate it
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
      if (!passwordRegex.test(value)) {
        this.setState((prevState) => ({
          errors: {
            ...prevState.errors,
            [name]: 'Password must contain at least 1 uppercase, 1 lowercase, 1 special character, ',
          },
        }));  
      } else {
        this.setState((prevState) => ({
          [name]: value,
          errors: {
            ...prevState.errors,
            [name]: '',
          },
        }));
      }
    } 
    else {
      // If the field is not the username or if it doesn't contain numbers, update the state normally
      this.setState({
        [name]: value,
        errors: {
          ...this.state.errors,
          [name]: '',
        },
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, username, mobilenum} = this.state;

    const errors = {};
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (!username) errors.username = 'Name is required';
    if (!mobilenum) errors.mobilenum = 'Mobile number is required';

    if (/\d/.test(username)) {
      errors.username = 'Name cannot contain numbers';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }


    var users = JSON.parse(localStorage.getItem("users")) || [];
    var userExists = users.some(function(user) {
          return user.email === email;
        });
    if (!userExists) 
    {
      users.push({ email: email, password: password, username: username,  mobilenum: mobilenum });
      localStorage.setItem("users", JSON.stringify(users));
      document.getElementById("output1").innerText = "Signup successful!";
      document.getElementById("output1").classList.remove("error"); 
      this.setState({  email: '', password: '', username: '', mobilenum: '', }); 
    }
    else 
    {
      alert("Email already exists")
      document.getElementById("output1").innerText = "Email already exists.";
      document.getElementById("output1").classList.add("error");
    }  

    this.setState({
      email: '',
      password: '',
      username: '',
      mobilenum: '',
      errors: {}
    });

  };
  
  render() {
    const { errors } = this.state;
    return (
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit} className="signup-form">
        <table>
          <tbody>
            <tr>
              <td>
                <label className="signup-label"><b>Email:</b></label>
              </td>
              <td>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} className="signup-input"/>

              </td>
            </tr>
            <tr>
              <td>
                <label className="signup-label"><b>Password:</b></label>
              </td>
              <td>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="signup-input" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="signup-label"><b>Name:</b></label>
              </td>
              <td>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="signup-input" />
              </td>
            </tr>
            <tr>
              <td>
                <label className="signup-label"><b>Mobile no.:</b></label>
              </td>
              <td>
                <input type="number" name="mobilenum" value={this.state.mobilenum} onChange={this.handleChange} className="signup-input" />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="signup-button">Signup</button>
        </form>
        <div id="output1" className="signup-output"></div>
        {errors.email && <span className="error">{errors.email}</span>}<br/>
        {errors.password && <span className="error">{errors.password}</span>}<br/>
        {errors.username && <span className="error">{errors.username}</span>}<br/>
        {errors.mobilenum && <span className="error">{errors.mobilenum}</span>}<br/>
        <Link to='/login'>Login</Link>
        <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
      </div>
    );  
  }
}

export default Signup;

