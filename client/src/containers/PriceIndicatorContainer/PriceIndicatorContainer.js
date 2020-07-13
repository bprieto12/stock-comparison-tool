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

    let open_low = "",
    open_high = "",
    forecast_low = "",
    forecast_high = "";

    if (props.open_low && props.open_high) {
        open_low = `L ${props.open_low}`;
        open_high = `H ${props.open_high}`;
    }

    if (props.forecast_low && props.forecast_high) {
        forecast_low = `L ${props.forecast_low}`;
        forecast_high = `H ${props.forecast_high}`;
    }

    const open_price = <ThreeItemIndicator low={open_low} middle={props.open} high={open_high} />
    const forecastPrice = <ThreeItemIndicator low={forecast_low} middle={props.forecast} high={forecast_high} />
    const volatility = <ThreeItemIndicator middle={volatilityText} low={`Beta: ${props.beta}`} />
    const p_e = <ThreeItemIndicator middle={props.forwardPE} />

    return (
        <div className="pic-container">
            {!props.recommendation ? "" : <div className="Recommendation">{`Recommendation: ${props.recommendation}`}</div>}
            <PriceIndicator indicatorContent={open_price} indicatorName="Open" />
            {props.forecast ? <PriceIndicator indicatorContent={forecastPrice} indicatorName="Forecast" /> : ""}
            {props.forwardPE ? <PriceIndicator indicatorContent={p_e} indicatorName="P/E" /> : ""}
            {props.beta ? <PriceIndicator indicatorContent={volatility} indicatorName="Volatility" /> : ""}
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
        forwardPE: state.stock_statistics.getPriceToEarnings(),
        recommendation: state.stock_statistics.getPurchaseRecommendation()
        // recommendation: "Buy"
    }
}

export default connect(mapStateToProps)(PriceIndicatorContainer);