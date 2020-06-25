class StockProfile {
    constructor(raw_data) {
        this.is_empty = !raw_data;
        this.raw_data = raw_data;
    }

    getSector = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.sector;
    }

    getIndustry = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.industry;
    }

    getNumEmployees = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.fullTimeEmployees;
    }

    getWebsite = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.website;
    }

    getCity = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.city;
    }

    getState = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.state;
    }

    getCountry = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.country;
    }

    getBusinessSummary = () => {
        if (this.is_empty) return;
        return this.raw_data.data.assetProfile.longBusinessSummary;
    }

    getFullName = () => {
        if (this.is_empty) return;
        return this.raw_data.data.price.longName;
    }

    getInstrumentType = () => {
        if (this.is_empty) return;
        return this.raw_data.data.price.quoteType;
    }

    getStockSymbol = () => {
        if (this.is_empty) return;
        return this.raw_data.data.price.symbol;
    }
}

export default StockProfile;