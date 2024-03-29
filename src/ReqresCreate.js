import React, { Component } from 'react';

class ReqresCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: null,
        };
      }
    
  componentDidMount() {
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "John Doe",
        job: "Developer"
      })
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        this.setState({response: res});
    })
  }

  render() {
    const { response }= this.state;
    return (
      <div>
        <h1>Reqres Create</h1>
        {
          response && (
            <div>
                <p>Created At: {response.createdAt}</p>
                <p>Id: {response.id}</p>
                <p>Name: {response.name}</p>
                <p>Job: {response.job}</p>
            </div>
          )
        }
      </div>
    );
  }
}

export default ReqresCreate;
