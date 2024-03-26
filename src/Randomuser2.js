import React from 'react';
import { Link } from 'react-router-dom';


class Randomuser extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: null };
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(res => {
                this.setState({ mydata: res });
            })
    }

    render() {
        const { mydata } = this.state;
        return (
            <>
                {mydata ? (
                    <div>
                        <h1>{mydata.results[0].name.title} {mydata.results[0].name.first} {mydata.results[0].name.last}</h1>
                        <img src={mydata.results[0].picture.large} alt="User" />
                        <p><b>Email:</b> {mydata.results[0].email}</p>
                        <p><b>Gender:</b> {mydata.results[0].gender}</p>
                        <p><b>Age:</b> {mydata.results[0].dob.age}</p>
                        <p><b>Phone:</b> {mydata.results[0].phone}</p>
                        <p><b>Location:</b> {mydata.results[0].location.city}, {mydata.results[0].location.country}</p>
                        
                    </div>
                ) : (
                        <p>Loading...</p>
                    )}
                    <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </>
        );
    }
}

export default Randomuser;
