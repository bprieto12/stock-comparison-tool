import React from 'react';
import { connect } from 'react-redux';
import './RangeBtn.css';
import actionTypes from '../../store/actionTypes';

const RangeBtn = (props) => {
    let btn_color = {backgroundColor: "white"};
    if (props.is_selected) {
        btn_color = {backgroundColor: "#9FB3C8", boxShadow: "2px 2px 2px #627D98"};
    }
    return (
        <button style={btn_color} 
                className="RangeBtn"
                onClick={() => props.updateSelectedRange(props.label)}>
            {props.label}
        </button>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSelectedRange: (range) => dispatch({type: actionTypes.UPDATE_STOCK_RANGE, value: range})
    }
}

const mapStateToProps = (state) => {
    return  {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeBtn);