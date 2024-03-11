import React from 'react';
import { Link } from 'react-router-dom';

class Color extends React.Component{constructor(props) {
      super(props);
      this.state = {
        color: '',
      };
    }
    
    handleChange = (e) => {
      this.setState({ color: e.target.value }, () => {
            document.body.style.backgroundColor = this.state.color;
          });
    };
    
    handleButtonClick = (color) => {
      this.setState({ color }, () => {
        document.body.style.backgroundColor = this.state.color;
      });
    };

    handleBackButtonClick = () => {
      this.setState({ color: '' }, () => {
        document.body.style.backgroundColor = this.state.color;
      });
    };
    
    render() {
      return (
        <div>
          <input type="text" value={this.state.color} onChange={this.handleChange}/>
          <button onClick={() => this.handleButtonClick('red')} style={{ backgroundColor: 'red' }}>Red</button>
          <button onClick={() => this.handleButtonClick('blue')} style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => this.handleButtonClick('green')} style={{ backgroundColor: 'green' }}>Green</button>
          <button onClick={this.handleBackButtonClick} style={{ backgroundColor: 'white', color: 'black' }}>Back</button>
    
          
          <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
     
        </div>
      );
    }
}

export default Color;
