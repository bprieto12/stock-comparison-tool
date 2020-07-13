import React, { Component } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="HomeContent">
                    <h1 className="title">Simple Stock Analysis</h1>
                    <SearchBar />
                    <div>
                        <h2 style={{paddingTop: 12}}>How this works</h2>
                        <ul className="list-instructions">
                            <li>1. Enter in a stock ticker symbol and click the search button</li>
                            <li>2. Check out all the cool analysis about the stock! </li>
                            <li>3. ...</li>
                            <li>4. Profit</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;