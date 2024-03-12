import React from 'react';
import { Link } from 'react-router-dom';

class Calc extends React.Component{
    constructor(props){
              super(props)
              this.state={};
            }
          
          changeData(e){
            console.log(e.target.value);
            this.setState({[e.target.name]:e.target.value});
          }
          
          docalc(operator) {
            const { txt1, txt2 } = this.state;
            let result;
          
            switch (operator) {
              case '+':
                result = parseInt(txt1) + parseInt(txt2);
                break;
              case '-':
                result = parseInt(txt1) - parseInt(txt2);
                break;
              case '*':
                result = parseInt(txt1) * parseInt(txt2);
                break;
              case '/':
                result = parseInt(txt1) / parseInt(txt2);
                break;
              default:
                result = 'Invalid operator';
            }
          
            this.setState({ ans: `Ans is ${result}` });
          }
          render(){
            return(<>
            value1<input type='text' name='txt1' onChange={this.changeData.bind(this)}></input><br></br>
            value2<input type='text' name='txt2' onChange={this.changeData.bind(this)}></input><br></br>
            <input type="button" onClick={() => this.docalc('+')} value="+"></input>
            <input type="button" onClick={() => this.docalc('-')} value="-"></input>
            <input type="button" onClick={() => this.docalc('*')} value="*"></input>
            <input type="button" onClick={() => this.docalc('/')} value="/"></input><br></br>
            {this.state.ans}
            <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </>)
          }
    }

export default Calc;
        