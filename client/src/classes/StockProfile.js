class StockProfile {
    constructor(raw_data) {
        this.is_empty = !raw_data;
        this.raw_data = raw_data;
    }

    getSector = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.sector;
        } catch (err) {
            return;
        }
    }

    getIndustry = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.industry;
        } catch (err) {
            return;
        }
    }

    getNumEmployees = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.fullTimeEmployees;
        } catch (err) {
            return;
        }
    }

    getWebsite = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.website;
        } catch (err) {
            return;
        }
    }

    getCity = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.city;
        } catch (err) {
            return;
        }
    }

    getState = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.state;
        } catch (err) {
            return;
        }
    }

    getCountry = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.country;
        } catch (err) {
            return;
        }
    }

    getBusinessSummary = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.assetProfile.longBusinessSummary;
        } catch (err) {
            return "";
        }
    }

    getFullName = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.price.longName;
        } catch (err) {
            return;
        }
    }

    getInstrumentType = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.price.quoteType;
        } catch (err) {
            return;
        }
    }

    getStockSymbol = () => {
        if (this.is_empty) return;
        try {
            return this.raw_data.data.price.symbol;
        } catch (err) {
            return;
        }
    }
}

export default StockProfile;