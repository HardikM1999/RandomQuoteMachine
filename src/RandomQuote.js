import React, {Component} from 'react';
import axios from 'axios';  


class TweetButton extends Component{
    render(){
        return(
            <div>
            <button className="btn btn-light"><a className="text-success" href="https://www.twitter.com/intent/tweet">Tweet here!</a></button>
            </div>
        );
    }
}
class ParaText extends Component{
    render(){
        const quote = this.props.quote;
        const author = this.props.author;
        return(
            <div>
                <p className="font-weight-bold">{quote}</p>
                <p className="text-warning font-weight-bold">{author}</p>
            </div>
        );
    }
}
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
                                <ParaText quote={this.state.quote} author={this.state.author} />
                                <button className="btn btn-primary" onClick={this.handleClick}>Get New Quote</button>
                                <br />
                                <br />
                                <TweetButton />
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