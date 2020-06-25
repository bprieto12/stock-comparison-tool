import React from 'react';
import { screen, render } from '@testing-library/react';
import StockName from '../containers/StockName/StockName.js';

describe("Performance Page Integration Tests", () => {
    test("Stock name should render without errors", () => {
        const { container } = render(<StockName />);
        expect(container).not.toBe(null);
    });

    test("Passing in a stock symbol without a full name should render a symbol only", () => {
        render(<StockName symbol="DIS" />);
        const stock_sym = screen.getByTestId("stock-symbol");
        const stock_name = screen.queryByTestId("stock-fullname");
        expect(stock_sym).not.toBe(null);
        expect(stock_name).toBe(null);
    });

    test("Passing in a stock symbol and a full name should render both", () => {
        render(<StockName symbol="DIS" full_name="Walt Disney Company" />);
        const stock_sym = screen.queryByTestId("stock-symbol");
        const stock_name = screen.queryByTestId("stock-fullname");
        expect(stock_sym).not.toBe(null);
        expect(stock_name).not.toBe(null);
    });
})