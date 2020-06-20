import React, { Component } from 'react';
import { connect } from 'react-redux';
import RangeBtn from './RangeBtn';
import "./RangeSelector.css";

function mapStateToProps(state) {
    return {
        selected_range: state.selected_stock_range
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

class RangeSelector extends Component {
    render() {
        return (
            <div className="RangeSelector">
                <RangeBtn label="1d" is_selected={this.props.selected_range === "1d"}/>
                <RangeBtn label="1w" is_selected={this.props.selected_range === "1w"}/>
                <RangeBtn label="1m" is_selected={this.props.selected_range === "1m"} />
                <RangeBtn label="1y" is_selected={this.props.selected_range === "1y"} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(RangeSelector);