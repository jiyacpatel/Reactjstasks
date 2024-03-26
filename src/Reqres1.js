import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Reqres1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: { data: [] }
        };
    }

    componentDidMount() {
        fetch("https://reqres.in/api/users")
            .then(res => res.json())
            .then(res => {
                console.table(res);
                this.setState({ mydata: res });
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    render() {
        const { mydata } = this.state;

        return (
            <div>
                <h1>Reqres - Get - List users</h1>                
                <h2>Users:</h2>
            
                    <table>
                        <thead>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Photo</th>
                        </thead>
                        {mydata.data.map((user, index) => (
                            // <li key={index}>
                        //     <img src={user.avatar} alt={`User ${index + 1}`} />
                        //     <p>{user.first_name}</p>
                        //     <p>{user.last_name}</p>
                        //     <p>{user.email}</p>
                        // </li>
                            <tbody>
                                <tr key={index}>
                                    <td>{user.first_name}</td>
                                    <td>{user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td><img src={user.avatar} alt={`User ${index+1}`}/></td>
                                </tr>
                            </tbody>
                        ))}

                    </table>
                    <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </div>
        );
    }
}

export default Reqres1;
