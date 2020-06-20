import React, { Component, Fragment } from 'react';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
import { connect } from 'react-redux';
import RangeSelector from '../RangeSelector/RangeSelector';
const Plot = createPlotlyComponent(Plotly);


class PerformancePlot extends Component {
    render() {
        return (
            <Fragment>
                <RangeSelector />
                <div>
                <Plot
                    data={[
                        {
                            y: this.props.open_prices,
                            x: this.props.time_stamps,
                            type: 'scatter',
                            model: 'lines',
                            marker: {
                                color: '#3EBD93'
                            }
                        }
                    ]}
                    layout={{title: "Open Price"}}
                />
                </div>
                
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("in performance plot");
    console.log(state);
    return {
        open_prices: !state.selected_instrument.chart ? [1,2,3,4,5] : state.selected_instrument.chart.result[0].indicators.quote[0].open,
        time_stamps: !state.selected_instrument.chart ? [1,2,3,4,5] : state.selected_instrument.chart.result[0].timestamp
    }
}

export default connect(mapStateToProps)(PerformancePlot);