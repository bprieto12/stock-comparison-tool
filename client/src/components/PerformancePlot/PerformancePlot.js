import React, { Component, Fragment } from 'react';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
import { connect } from 'react-redux';
import RangeSelector from '../RangeSelector/RangeSelector';
import { faSlidersH } from '@fortawesome/fontawesome-free-solid';
const Plot = createPlotlyComponent(Plotly);


class PerformancePlot extends Component {
    render() {
        return (
            <Fragment>
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
                        layout={{
                            title: "Open Price", 
                            autosize: true,
                            margin: {
                                l:40, r:40
                            },
                            xaxis: {
                                zeroline: false,
                            },
                            yaxis: {
                                zeroline: false
                            }
                        }}
                        useResizeHandler={true}
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
                <RangeSelector />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("in performance plot");
    // console.log(state);
    console.log(state.chart_data.getTimeRange())
    return {
        open_prices: state.chart_data.getValues(),
        time_stamps: state.chart_data.getTimeRange()
    }
}

export default connect(mapStateToProps)(PerformancePlot);