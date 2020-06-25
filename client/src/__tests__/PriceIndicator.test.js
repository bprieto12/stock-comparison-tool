import React from 'react';
import { screen, render } from '@testing-library/react';
import PriceIndicator from '../containers/PriceIndicator/PriceIndicator';

describe("Price Indicator tests", () => {
    test("Price Indicator renders", () => {
        const { container } = render(<PriceIndicator />);
        expect(container).not.toBe(null);
    })
})