import React, { Component } from 'react';

class ReqresUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users/2", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "Jane Doe",
        job: "Designer"
      })
    })

    .then(response => response.json())
    .then(response => {
        console.log(response)
        this.setState({userData: response})
    })

    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then(data => {
    //     this.setState({ userData: data });
    //   })
    //   .catch(error => {
    //     this.setState({ error: 'There was a problem with the fetch operation:'});
    //   });
  }

  render() {
    const { userData } = this.state;

    return (
      <div>
        <h2>Reqres update</h2>
        {
          userData && (
            <div>
              <p>Name: {userData.name}</p>
              <p>Job: {userData.job}</p>
              <p>Updated At: {userData.updatedAt}</p>
            </div>
          )
        }

        {/* {error ? (
          <p>Error: {error}</p>
        ) : (
          userData && (
            <div>
              <p>Name: {userData.name}</p>
              <p>Job: {userData.job}</p>
              <p>Updated At: {userData.updatedAt}</p>
            </div>
          )
        )} */}
      </div>
    );
  }
}

export default ReqresUpdate;
