import React, { Component } from 'react';
import { connect } from 'react-redux';
import RangeBtn from './RangeBtn';
import "./RangeSelector.css";

const available_range = ['1d', '5d', '6mo', '1y']

function mapStateToProps(state) {
    return {
        selected_range: state.selected_stock_range
    };
}


class RangeSelector extends Component {
    render() {
        return (
            <div className="RangeSelector">
                {available_range.map(range => {
                    return  <RangeBtn key={range}
                                      label={range} 
                                      is_selected={this.props.selected_range === range}
                                      />
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(RangeSelector);