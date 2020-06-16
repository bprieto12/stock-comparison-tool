import React, { Component } from 'react';
import PerformancePlot from '../PerformancePlot/PerformancePlot';
import SelectedInstrumentStats from '../SelectedInstrumentStats/SelectedInstrumentStats';

class SelectedStockPerformance extends Component {
    render () {
        return (
            <div>
                <h2 style={{color: "#334E68"}}>{"S&P 500"}</h2>
                <PerformancePlot />
                <SelectedInstrumentStats />
            </div>
        );
    }
}

export default SelectedStockPerformance;