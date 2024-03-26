import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

class Axiosdemo extends React.Component{
    constructor(props){
        super(props);
        this.state= {mydata:[]}
    }

    componentDidMount(){
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data);
            this.setState({mydata:res.data});
        })
    }

    render(){
        return(<>
        <table>
            {this.state.mydata.map((v,i)=>{
            return(<tr>
                <td>{v.title}</td>
                <td>{v.price}</td>
                <td><img src={v.image} width={30} alt={v.title}/></td>
            </tr>)
        })}
        </table>
        <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
        </>)
    }
}

export default Axiosdemo;