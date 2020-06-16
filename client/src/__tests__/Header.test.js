import React from 'react';
import { render, screen } from '../utils/test-utils';
import Header from '../components/Header/Header';

describe("Header Tests", () => {
    test("Header renders without breaking", () => {
        const { container } = render(<Header />);
        expect(container).not.toBe(null);
    });

    test("Header has a search bar", () => {
        render(<Header />);
        const searchBar = screen.getByTestId("search-bar");
        expect(searchBar).not.toBe(null);
    });
});