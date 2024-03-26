import React from 'react';
import { Link } from 'react-router-dom';

class Statedemo extends React.Component{
    constructor(props){
             super(props)
             this.state={myname:"jiya"};
        }
      
        changeData(){
          this.setState({myname:"jp"})
        }
      
        render(){
          return(
            <>
            <button onClick={this.changeData.bind(this)}>Click</button>
            <button onClick={()=>this.setState({myname:"j"})}></button>
            <input type='text' onChange={(e)=> this.setState({myname:e.target.value})}></input><br></br>
            {this.state.myname}
            <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </>
          )
        }
    }

    export default Statedemo;