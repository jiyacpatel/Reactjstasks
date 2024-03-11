import React from 'react';
import { Link } from 'react-router-dom';

class ClickCounter extends React.Component{
    constructor(props) { 
          super(props);
          this.state = {
            count: 0,
          };
        }
        componentDidMount() {
          const count = localStorage.getItem('clickCount');
          if (count) {
            this.setState({ count: parseInt(count) });
          }
        }
        incr = () => {
          if(this.state.count>9)
          {
            alert("sorry");
            this.setState({msg:"sorry,maximum possible value is 10"});
          }
          else
          {
            this.setState((prevState) => ({ count: prevState.count + 1 }), () => {
              localStorage.setItem('clickCount', this.state.count);
            });
          }
          
        };
        
        decr = () => {
          if(this.state.count<2)
          {
            alert("sorry");
            this.setState({msg:"sorry,minimum possible value is 1"});
        
          }
          else
          {
            this.setState((prevState) => ({ count: prevState.count - 1 }), () => {
              localStorage.setItem('clickCount', this.state.count);
            });
          }  
        };
        render() {
          return (
            <div>
              <h1>Click Counter</h1>
              <p>Count: {this.state.count}</p>
              <button onClick={this.incr}>Increment</button>
              <button onClick={this.decr}>Decrement</button><br></br>
              {this.state.msg}
              <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </div>
          );
        }
}

export default ClickCounter;