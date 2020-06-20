import React, { Component } from 'react';

class StockPerformance extends Component {
    render () {
        return (
            <div>
                <h2 style={{color: "#334E68"}}>{"S&P 500"}</h2>
                <PerformancePlot />
            </div>
        );
    }
}

export default StockPerformance;