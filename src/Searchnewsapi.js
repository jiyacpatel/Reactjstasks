import axios from "axios";
import React from "react";

class Searchnewsapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mydata: [],
            searchText: ""
        };
    }

    componentDidMount() {
        this.fetchData("tesla"); 
    }

    fetchData(query) {
        axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2024-02-15&sortBy=publishedAt&apiKey=5c2f730f7750409ca105b093de561c7b`)
            .then(res => {
                console.log(res.data);
                this.setState({ mydata: res.data.articles });
            })
    }

    handleChange = (e) => {
        // this.setState({ searchText: e.target.value });
        const searchText = e.target.value;
        this.setState({ searchText }, () => {
            this.fetchData(searchText);
        });
        
    }

    // handleSearch = () => {
    //     this.fetchData(this.state.searchText);
    // }

    render() {
        return (
            <div>
                <input type='text' value={this.state.searchText} onChange={this.handleChange} />
                {/* <button onClick={this.handleSearch}>Search</button> */}
                <div className="card-container">
                    {this.state.mydata.map((v, i) => (
                        <div key={i} className="card">
                            <img src={v.urlToImage} alt={v.title} />
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
            </div>
        )
    }
}

export default Searchnewsapi;
