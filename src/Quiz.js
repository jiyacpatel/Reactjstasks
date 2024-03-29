import React from 'react';
import { Link } from 'react-router-dom';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] };
        this.next = this.next.bind(this);
    }

    componentDidMount() {
        this.next();
    }

    next(){
        fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
            .then(res => res.json())
            .then(data => {
                console.log("Data from API:", data); 
                if (data.results) {
                    console.table(data.results);
                    this.setState({ mydata: data.results });
                } else {
                    console.error("No results found in the data:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    // componentDidMount() {
    //     fetch("https://opentdb.com/api.php?amount=10&category=9&type=multiple")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.table(data.results);
    //             this.setState({ mydata: data.results });
    //         })
    //         .catch(error => console.error("Error fetching data:", error));
    // }

    render() {
        return (
            <>
        {this.state.mydata.map((v, i) => (
           <div key={i}>
           <p><b>Question {i + 1}:</b> {v.question}</p>
           {/* <p>-{v.correct_answer}   -{v.incorrect_answers.join('   -')}</p> */}
           <ul>
             <li>{v.correct_answer}</li>
             {v.incorrect_answers.map((incorrectAnswer, i) => (
             <li key={i}>{incorrectAnswer}</li>
             ))}
          </ul>
           <p>Correct Answer: {v.correct_answer}</p>
           {/* <p>Incorrect Answers: {v.incorrect_answers.join(', ')}</p> */}
       </div>
        ))}
        <button onClick={this.next}><b>Next</b></button>
        <Link to="/" style={{ display: 'block', marginTop: '10px'}}>Back to Menu</Link>

            </>
        );
    }
}

export default Quiz;
