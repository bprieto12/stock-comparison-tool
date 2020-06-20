import React from 'react';
import PriceIndicator from '../PriceIndicator/PriceIndicator';
import OneItemIndicator from '../PriceIndicator/OneItemIndicator';
import TwoItemIndicator from '../PriceIndicator/TwoItemIndicator';
import ThreeItemIndicator from '../PriceIndicator/ThreeItemIndicator';
import './PriceIndicatorContainer.css';


const PriceIndicatorContainer = (props) => {
    const open_price = <ThreeItemIndicator low={100.21} middle={121.91} high={124.12} />
    const forecastPrice = <ThreeItemIndicator low={120.01} middle={131.21} high={140.8} />
    const volatility = <TwoItemIndicator content={"High"} subcontent={"Beta: 2.1"} />
    const p_e = <OneItemIndicator value={2.1} />

    return (
        <div className="pic-container">
            <PriceIndicator indicatorContent={open_price} indicatorName="Open" />
            <PriceIndicator indicatorContent={forecastPrice} indicatorName="Forecast" />
            <PriceIndicator indicatorContent={p_e} indicatorName="P/E" />
            <PriceIndicator indicatorContent={volatility} indicatorName="Volatility" />
        </div>
    );
};

export default PriceIndicatorContainer;