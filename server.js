const express = require("express");
const app = express();
const port = 3000;

app.get("/gps", (req, res) => {
    res.json({
        classroom: "Cloud Lab",
        latitude: 10.9985,
        longitude: 76.9432
    });
});

app.get("/metrics", (req, res) => {
    res.send("app_requests_total 1");
});

app.listen(port, () => {
    console.log(`GPS Microservice running on port ${port}`);
});