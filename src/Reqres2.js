import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reqres2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: { data: [] },
            searchid: ""
        };
    }

    componentDidMount() {
        // this.setState({searchid: 1})
        // this.getuser("1")
    }

    getuser(id){
        fetch(`https://reqres.in/api/users/${id}`)
        .then(res => res.json())
        .then(res => {
            console.table(res);
            this.setState({ mydata: res });
        })
        .catch(error => console.error("Error fetching data:", error));
    }

    handleChange = (e) => {
        const searchid = e.target.value;
        this.setState({ searchid}, () => {
            this.getuser(searchid);
        })
    }

    render() {
        const { mydata, searchid } = this.state;
        
        return (
            <div>
                <h1>Reqres - Get - Single user</h1>  
                <input type="text" value={this.state.id} onChange={this.handleChange}></input>

                {searchid==="" ? (
                    
                    <p>Please enter id</p>
                ) : (
                    <div>
                        <img src={mydata.data.avatar} alt={`User ${searchid}`}/>
                <p><b>Firstname: </b>{mydata.data.first_name}</p>
                <p><b>Lastname: </b>{mydata.data.last_name}</p>
                <p><b>Email: </b>{mydata.data.email}</p> 
                    </div>
                )}  
                <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>           
            </div>
        );
    }
}

export default Reqres2;
