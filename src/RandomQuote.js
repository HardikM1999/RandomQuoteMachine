import React, {Component} from 'react';
import './RandomQuote.css';
import axios from 'axios';

const headStyle = {
    color: 'tomato',
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
                <h1 style={headStyle}>Random Quote Machine</h1>
                <h4 style={headStyle}>Project for FreeCodeCamp Certification by Hardik Mehta</h4>
                <p style={quoteStyle}>{this.state.quote}</p>
                <p style={quoteStyle}>{this.state.author}</p>
                <button className="button" onClick={this.handleClick}>Get New Quote</button>
            </div>
        );
    }
}
export default RandomQuote;