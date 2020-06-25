import React from 'react';
import './RangeBtn.css';
import { updateChartData } from '../../store/actions';
import { connect } from "react-redux";

const RangeBtn = (props) => {
    let btn_color = {backgroundColor: "white"};
    if (props.is_selected) {
        btn_color = {backgroundColor: "#9FB3C8", boxShadow: "2px 2px 2px #627D98"};
    }
    return (
        <button style={btn_color} 
                className="RangeBtn"
                onClick={() => props.update(props.label)}>
            {props.label}
        </button>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: (range) => dispatch(updateChartData(range))
    }
}

export default connect(null,mapDispatchToProps)(RangeBtn);