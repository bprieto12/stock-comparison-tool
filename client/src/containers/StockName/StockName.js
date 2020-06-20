import React, { Fragment } from 'react';
import "./StockName.css";

const StockName = (props) => {
    let stockName = "";
    if (props.symbol) {
        if (props.full_name) {
            stockName = <Fragment>
                            <h2 className="symbol" data-testid="stock-symbol">{props.symbol}</h2>
                            <h3 className="name" data-testid="stock-fullname">{props.full_name}</h3>
                        </Fragment>;
        } else {
            stockName = <h2 data-testid="stock-symbol">{props.symbol}</h2>
        }
    }
    return (
        <div>
            { stockName }
        </div>
    );
};

export default StockName;