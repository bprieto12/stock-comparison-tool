import { getChartData, getStockProfile } from '../data/accessors/accessorMethods';
import { chart_one } from '../mocks/mockChartData';
import { profile_one } from '../mocks/mockStockProfileData';
import axios from 'axios';

jest.mock("axios");

describe("Accessor Method Tests", () => {
    // beforeEach(() => {
    //     // fetchMock.resetMocks(JSON.stringify(chart_one));
    // });

    test("getChartData returns a HistoricalStockData class with data inside", async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(chart_one));
        let chartData = await getChartData("DIS", "5d");
        expect(chartData.getValues().length > 0).toBe(true);
        expect(chartData.getTimeRange().length > 0).toBe(true);
    });

    test("getStockProfle returns a StockProfile with data inside", async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(profile_one));
        let profile = await getStockProfile("DIS");
        expect(profile.getSector()).toBe("Communication Services");
        expect(profile.getIndustry()).toBe("Entertainment");
        expect(profile.getWebsite()).toBe("http://www.thewaltdisneycompany.com");
        expect(profile.getBusinessSummary()).not.toBe("");
        expect(profile.getFullName()).toBe("The Walt Disney Company");
        expect(profile.getInstrumentType()).toBe("EQUITY");
    })
})