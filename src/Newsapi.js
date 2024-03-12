import axios from "axios";
import React from "react";

class Newsapi extends React.Component{
    constructor(props){
        super(props);
        this.state={mydata:[]};
    }

    componentDidMount(){
        axios.get("https://newsapi.org/v2/everything?q=tesla&from=2024-02-11&sortBy=publishedAt&apikey=5c2f730f7750409ca105b093de561c7b")
        .then(res=>{
            console.log(res.data);
            this.setState({mydata:res.data.articles});
        })
    }

    render(){
        return(
        // <>
        // <table border={1}>
        // {this.state.mydata.map((v,i)=>{
        //     return(<tr>
        //         <td>{v.author}</td>
        //         <td>{v.content}</td>
        //         <td>{v.description}</td>
        //         <td>{v.publishedAt}</td>
        //         <td>{v.title}</td>
        //         <td>{v.url}</td>
        //         <td><img src={v.urlToImage} width={60}/></td>
        //     </tr>)
        // })}
        // </table>            
        // </>

        <div className="card-container">
                {this.state.mydata.map((v, i) => (
                    <div key={i} className="card">
                        <img src={v.urlToImage} alt={v.title}/>
                        <div className="card-body">
                            <h3>{v.title}</h3>
                            <p>{v.description}</p>
                            <p><b>Published by:</b> {v.author}</p>
                            <p><b>Published at:</b> {v.publishedAt}</p>
                            <a href={v.url}>Read More</a>
                        </div>
                    </div>
                ))}
            </div>
        )

    }
}

export default Newsapi;