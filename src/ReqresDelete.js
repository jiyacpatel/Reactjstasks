import React, { Component } from 'react';

class ReqresDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
          response: null,
        };
      }

  componentDidMount() {
    fetch("https://reqres.in/api/users/2", {
      method: "DELETE"
    })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     console.log("User deleted successfully");
    //   })
    //   .catch(error => {
    //     console.error('There was a problem with the fetch operation:', error);
    //   });
    
    .then(res=> {
        if(res.ok){
            console.log("deleted successfully")
            this.setState({response: "Deleted successfully"})
        }
        else{
            this.setState({response: "error"})
        }
    })
      
  }

  render() {
    const{response}= this.state;
    return (
      <div>
        <h2>Reqres Delete</h2>
        {response}
      </div>
    );
  }
}

export default ReqresDelete;
