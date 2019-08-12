import React, {Component} from 'react';
import './RandomQuote.css';
import axios from 'axios';

const headStyle = {
    color: 'darkorange',
};
const quoteStyle ={
    fontSize: '15px',
    fontWeight: 'bold',
    color: 'black',
};
class RandomQuote extends Component{
    state = {
        quote: null,
        author: null,
    }
    constructor(){
        super()
        this.state = {
            quote: '',
            author: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        axios.get("https://api.quotable.io/random").then(response => this.setState({quote: response.data.content, author: response.data.author}))
    }
    render(){
        return(
            <div className="QuoteBox">
                <div className="jumbotron">
                    <h1 className="text-info">Random Quote Machine</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                        </div>
                        <div className="col-sm-4 card bg-info mx-auto">
                            <div className="card-body">
                                <p className="font-weight-bold">{this.state.quote}</p>
                                <p className="text-warning font-weight-bold">{this.state.author}</p>
                                <button className="btn btn-primary" onClick={this.handleClick}>Get New Quote</button>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default RandomQuote;