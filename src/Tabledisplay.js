import React from "react";
import { Link } from 'react-router-dom';

class Tabledisplay extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            gender: '',
            arr: [],
            editidx: '',
            nameError: ''
         }
    }

    componentDidMount() {
        const inputArray = localStorage.getItem('inputArray');
        if (inputArray) {
          this.setState({ arr: JSON.parse(inputArray) });
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [e.target.name]: e.target.value });
        if (name === 'name') {
            const regex = /^[a-zA-Z]*$/; 
            if (!regex.test(value)) {
                this.setState({ nameError: 'Name must contain only alphabets' });
            } else {
                this.setState({ nameError: '' });
            }
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.editidx !== '' )
        {
            this.editask2();
        }
        else{
            this.addtask();
        }
    }

    addtask = () => {
        const{name, gender}=this.state;
        if(name!=='' && gender!=='')
        {
            const newdata={name: name, gender: gender};
            const newarr = [...this.state.arr, newdata];
            this.setState({arr: newarr})
            this.setState({name:'',gender:''})
  
        localStorage.setItem('inputArray', JSON.stringify(newarr));
    
        }
    }

    deletedata = (index) => {
        const newArr = [...this.state.arr];
        const nnewArr = newArr.map((value, i, array) => {
            if (i >= index && i < array.length - 1) {
              return array[i + 1];
            }
            return value;
          }); 
        this.setState({ arr: nnewArr.slice(0, nnewArr.length - 1) });
        localStorage.setItem('inputArray', JSON.stringify(nnewArr.slice(0, nnewArr.length - 1)));
    }

    editask = (index) => {
        this.setState({name: this.state.arr[index].name, gender: this.state.arr[index].gender});
        this.setState({editidx: index})
    }

    editask2 = () => {
        const{ name,gender, editidx} = this.state;
        const newarr= this.state.arr;
        newarr[editidx].name=name;
        newarr[editidx].gender=gender;
        this.setState({arr: newarr});
        this.setState({name:"", gender:"", editidx:""})
        localStorage.setItem('inputArray',JSON.stringify(newarr));
    }

    render(){
        const { name, gender } = this.state;
        return(
            <>
            <form onSubmit={this.handleSubmit}>
                <label>Name<input type="text" name="name" value={name} onChange={this.handleChange}></input></label>
                <label>Gender<input type="text" name="gender" value={gender} onChange={this.handleChange}></input></label>
                {this.state.editidx !== ''? (<button>Edit data</button>) : (<button>Add data</button>)}
                {this.state.nameError && <p style={{ color: 'red' }}>{this.state.nameError}</p>}
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arr.map((v,i) => {
                        return(<tr key={i}>
                            <td>{i+1}</td>
                            <td>{v.name}</td>
                            <td>{v.gender}</td>
                            <td><button onClick={() => this.editask(i)}>edit</button></td>
                            <td><button onClick={() => this.deletedata(i)}>Delete</button></td>  
                        </tr>)
                    })}
                </tbody>
            </table>
            <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
            </>
        )
    }
}

export default Tabledisplay;