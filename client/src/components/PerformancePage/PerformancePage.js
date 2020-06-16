import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './PerformancePage.module.css';
import SelectedStockPerformance from '../SelectedStockPerformance/SelectedStockPerformance';

class PerformancePage extends Component {
    
    render () {
        let pageContents = null;
        // console.log(this.props.selected_instrument)
        // if (!this.props.selected_instrument || Object.keys(this.props.selected_instrument).length == 0)  {
        //     pageContents = <b>Select an Instrument to Start</b>
        // } else {
        //     pageContents = <SelectedStockPerformance />;
        // }
        pageContents = <SelectedStockPerformance />;

        return (
            <div className={styles.PerformancePage}>
                <span className={styles.pageWidth}>
                { pageContents }
                </span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selected_instrument: state.selected_instrument
    }
}

export default connect(mapStateToProps)(PerformancePage);