import React from 'react';
import { screen, render } from '../utils/test-utils';
import RangeSelector from '../components/RangeSelector/RangeSelector';

describe("Range Selector tests", () => {
    test("Range Selector has four buttons", () => {
        render(<RangeSelector />);
        screen.queryAllByRole("button");
        
    })
})