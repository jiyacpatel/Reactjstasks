import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      newdata: '',
      editidx: ''
    };
  }

  handleChange = (event) => {
    this.setState({ newdata: event.target.value });
  };

  addtask = () => {
    const { newdata } = this.state;
    this.setState(prevState => ({
        arr: [...prevState.arr, newdata]
      })); 

    this.setState({newdata: " "});
  };

  addtask2 = () => {
    const { newdata } = this.state;

    //const newarr = this.state.arr.concat(newdata);
    // const newarr = [...this.state.arr]; 

    const newarr=this.state.arr; //copy
    newarr.push(newdata); //append
    this.setState({ arr: newarr }); //update

    this.setState({newdata: " "})
  };

  deltask = (index) => {
    const newArr = [...this.state.arr];
    // for(let i=index;i<newArr.length-1;i++)
    // {
    //     newArr[i]=newArr[i+1];
    // }

    //-----
    // newArr.forEach((value, i, array) => {
    //     if (i>=index && i< array.length - 1) {
    //         array[i] = array[i + 1];
    //     }
    // });
    // this.setState({ arr: newArr.slice(0, newArr.length - 1) });

    // const newArr = [...this.state.arr];
    // newArr.splice(index, 1);
    // this.setState({ arr: newArr });

    // const nnewArr = newArr.map((value, i, array) => {
    //     if (i >= index && i < array.length - 1) {
    //       return array[i + 1];
    //     }
    //     return value;
    //   });
    //  this.setState({ arr: nnewArr.slice(0, nnewArr.length - 1) });  
      
    const nnewArr = newArr.filter((value, i) => i !== index);

    this.setState({ arr: nnewArr.slice(0, nnewArr.length ) });    
  };

  editask = (index) => {
    this.setState({ newdata: this.state.arr[index]});
    this.setState({editidx : index})
  }

  editask2 = () => {
    const { newdata,editidx } = this.state;
    const newarr=this.state.arr;
    newarr[editidx]=newdata;
    this.setState({ arr: newarr }); 
    this.setState({newdata: " "});
    this.setState({editidx: ""})
  }

  render() {
    const { newdata } = this.state;

    return (
      <div>
        <input type="text" value={newdata} onChange={this.handleChange} placeholder="Add a new task"/>
        {this.state.editidx !== '' ? (<button onClick={this.editask2}>Edit Task</button>) : (<button onClick={this.addtask2}>Add Task</button>)}
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

export default TodoList;
