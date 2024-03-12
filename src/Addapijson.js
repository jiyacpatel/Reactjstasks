import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom';

class Addapijson extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    sendData(){
        var mydata = {
            todo_title: this.state.txt1,
            todo_details: this.state.txt2
        }
        //JSON
        var jsondata= JSON.stringify(mydata);
        var config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post("https://akashsir.in/myapi/crud/todo-add-json.php",jsondata,config)
        .then(res=>{
            console.log(res);
            if(res.data.flag==="1")
            {
                alert("record added" + res.data.message);
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
        </>)
    }
}

export default Addapijson;