const express = require("express");
const app = express();
const port = 6000;
const axios = require("axios");

app.get("/api/autoComplete", async (req, res) => {
    if (!req.query.search_text) {
        res.status(400).send("Auto Complete requires search text to be sent");
    } else {
        const config = {
            params: {
                "query": req.query.search_text,
                "lang": "en",
                "region": "US"
            },
            headers: {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "42ced2a81dmsh257ae0cd557d30dp1f5ea0jsn36641705463b",
                "useQueryString": true
            }
        }
        try {
            const response = await axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete", config);
            res.json(response.data);
        } catch (err) {
            res.status(400).send("Error processing request for autocomplete" + err);
        }
    }
})

app.get("/api/stockStatistics", async (req, res) => {
    // required parameters
    // * symbol

    if (!req.query.symbol) {
        res.status(400).send("Stock Profile requires a symbol");
    } else {
        let url = new URL("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-statistics");
        url.searchParams.set("symbol", req.query.symbol);
        try {
            let response = await axios.get(url);
            res.status(200).json(response.data);
        } catch (err) {
            res.status(400).send(`Error in stock statitics request. ${err}`);
        }
    }
})


app.get("/api/stockProfile", async (req, res) => {
    // required parameters
    // * symbol

    if (!req.query.symbol) {
        res.status(400).send("Stock Profile requires a symbol");
    } else {
        let url = new URL("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile");
        url.searchParams.set("symbol", req.query.symbol);
        try {
            let response = await axios.get(url);
            res.status(200).json(response.data);
        } catch (err) {
            res.status(400).send(`Error in stock profile request. ${err}`);
        }
    }
})

app.get("/api/getCharts", async (req, res) => {
    // required parameters
    // * symbol
    // optional parameters
    // * comparisons (a comma separated string of symbols)
    // * interval (5m | 15m | 1d | 1wk | 1mo)
    // * range (1d | 5d | 3mo | 6mo | 1y | 5y | max)
    console.log(`Symbol: ${req.query.symbol}`);
    if (!req.query.symbol) {
        res.status(400).send("Auto Complete requires search text to be sent");
    } else {
        let params = {
            "region": "US",
            "lang": "en",
            "interval": "5m",
            "range": "1d",
            "symbol": req.query.symbol 
        }
        if (req.query.comparisons) {
            // should probably check if comparisons is valid
            params.comparisons = req.query.comparisons;
        }
        
        const intervalDomain = ["5m", "15m", "1d", "1wk", "1mo"];
        if (req.query.interval && intervalDomain.includes(req.query.interval)) {
            params.interval = req.query.interval;
        }

        const rangeDomain = ["1d", "5d", "3mo", "6mo", "1y", "5y", "max"];
        if (req.query.range && intervalDomain.includes(req.query.range)) {
            params.range = req.query.range;
        }


        const config = {
            params: params,
            headers: {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": "42ced2a81dmsh257ae0cd557d30dp1f5ea0jsn36641705463b",
                "useQueryString": true
            }
        }
        try {
            const response = await axios.get("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts",config);
            res.status(200).json(response.data);
        } catch (err) {
            res.status(400).send("Error processing request for autocomplete " + err);
        }
    }
})

app.listen(port, () => console.log("App started, listening on port " + port));