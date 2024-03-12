import React from 'react';
import { Link } from 'react-router-dom';
class Fetchapi extends React.Component{
    constructor(props){
        super(props);
        this.state= { mydata: []};
    }

    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res=>{
            console.table(res);
            this.setState({mydata: res})
        })
    }

    render(){
        return(
            <>
            <table border={1}>
    <thead>
        <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Image</th>
        </tr>
    </thead>
    <tbody>
        {this.state.mydata.map((v, i) => (
            <tr key={i}>
                <td>{v.title}</td>
                <td>${v.price}</td>
                <td><img src={v.image} width={100} alt={v.title} /></td>
            </tr>
        ))}
    </tbody>
</table>  
<Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </>
        );
    }
}

export default Fetchapi;