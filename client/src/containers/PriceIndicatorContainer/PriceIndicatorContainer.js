import React from 'react';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import OneItemIndicator from '../PriceIndicator/OneItemIndicator';
import TwoItemIndicator from '../PriceIndicator/TwoItemIndicator';
import ThreeItemIndicator from '../PriceIndicator/ThreeItemIndicator';
import { connect } from 'react-redux';
import './PriceIndicatorContainer.css';


const PriceIndicatorContainer = (props) => {
    let volatilityText = "";
    if (props.beta < 1) {
        volatilityText = "Low";
    } else if (props.beta >= 1 && props.beta <= 1.25) {
        volatilityText = "Avg"
    } else if (props.beta > 1.25) {
        volatilityText = "High"
    }

    const open_price = <ThreeItemIndicator low={`L ${props.open_low}`} middle={props.open} high={`H ${props.open_high}`} />
    const forecastPrice = <ThreeItemIndicator low={`L ${props.forecast_low}`} middle={props.forecast} high={`H ${props.forecast_high}`} />
    const volatility = <ThreeItemIndicator middle={volatilityText} low={`Beta: ${props.beta}`} />
    const p_e = <ThreeItemIndicator middle={props.forwardPE} />

    return (
        <div className="pic-container">
            <PriceIndicator indicatorContent={open_price} indicatorName="Open" />
            <PriceIndicator indicatorContent={forecastPrice} indicatorName="Forecast" />
            <PriceIndicator indicatorContent={p_e} indicatorName="P/E" />
            <PriceIndicator indicatorContent={volatility} indicatorName="Volatility" />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state,
        open_low: state.stock_statistics.getCurrentOpenPriceLow(),
        open_high: state.stock_statistics.getCurrentOpenPriceHigh(),
        open: state.stock_statistics.getCurrentOpenPrice(),
        forecast_low: state.stock_statistics.getForecastLow(),
        forecast_high: state.stock_statistics.getForecastHigh(),
        forecast: state.stock_statistics.getForecast(),
        beta: state.stock_statistics.getBeta(),
        forwardPE: state.stock_statistics.getPriceToEarnings()
    }
}

export default connect(mapStateToProps)(PriceIndicatorContainer);