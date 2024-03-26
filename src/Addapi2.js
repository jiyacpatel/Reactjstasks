import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

class Addapi2 extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    sendData(){
        var myform= new FormData();
        myform.append("todo_title",this.state.txt1);
        myform.append("todo_details",this.state.txt2);
        axios.post("https://akashsir.in/myapi/crud/todo-add-api.php",myform)
        .then(res=>{
            console.log(res);
            if(res.data.flag==="1")
            {
                alert("record added!" + res.data.message);
            }
            else{
                alert(res.data.message);
            }
        })
    }

    render(){
        return(<>
        Title: <input type='text' onChange={(e)=>this.setState({'txt1': e.target.value})}/>
        Details: <input type='text' onChange={(e)=>this.setState({'txt2': e.target.value})}/>
        <input type='button' value="ClickMe" onClick={this.sendData.bind(this)}></input>
        <Link to="/" style={{ display: 'block', marginTop: '10px' }}>Back to Menu</Link>
        </>);
    }
}

export default Addapi2;