import React, { Component } from 'react';
import { Link } from 'react-router-dom';

         

class TodoListls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      newdata: '',
      editidx: ''
    };
  }

  componentDidMount() {
    const taskArray = localStorage.getItem('taskArray');
    if (taskArray) {
      this.setState({ arr: JSON.parse(taskArray) });
    }
  }

  handleChange = (event) => {
    this.setState({ newdata: event.target.value });
  };

  addtask = () => { 
    const { newdata } = this.state; 

    const newarr=this.state.arr; //copy
    newarr.push(newdata); //append
    this.setState({ arr: newarr }); //update

    localStorage.setItem('taskArray', JSON.stringify(newarr));

    this.setState({newdata: " "})
  };

  deltask = (index) => {
    const newArr = this.state.arr;
    const nnewArr = newArr.map((value, i, array) => {
        if (i >= index && i < array.length - 1) {
          return array[i + 1];
        }
        return value;
      });

    localStorage.setItem('taskArray', JSON.stringify(nnewArr.slice(0, nnewArr.length - 1)));  
    this.setState({ arr: nnewArr.slice(0, nnewArr.length - 1) });
  };

  editask = (index) => {
    this.setState({ newdata: this.state.arr[index]});
    this.setState({editidx : index});
  }

  editask2 = () => {
    const { newdata,editidx } = this.state;
    const newarr=this.state.arr;
    newarr[editidx]=newdata;
    this.setState({ arr: newarr }); 
    this.setState({newdata: " "});
    this.setState({editidx : " "});
    localStorage.setItem('taskArray', JSON.stringify(newarr));
  }

  render() {
    const { newdata } = this.state;
    return (
      <div>
        <input type="text" value={newdata} onChange={this.handleChange} placeholder="Add a new task"/>
        {this.state.editidx !== '' ? (<button onClick={this.editask2}>Edit Task</button>) : (<button onClick={this.addtask}>Add Task</button>)}
        {this.state.arr.map((v,i)=> 
        {
            return(
            <ul>
                <li id={i}>{v} <button onClick={() => this.deltask(i)}>delete</button> <button onClick={() => this.editask(i)}>edit</button></li>
            </ul>)
        }
        )}
         <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
      </div>
    );
  }
}

export default TodoListls;
