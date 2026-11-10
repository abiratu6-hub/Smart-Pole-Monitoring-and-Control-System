const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let poleData = {
    temperature: 25,
    voltage: 220,
    current: 0.5,
    power: 110,
    lampStatus: "OFF"
};

// Get pole data
app.get("/api/status", (req, res) => {
    res.json(poleData);
});

// Turn lamp ON
app.post("/api/lamp/on", (req, res) => {
    poleData.lampStatus = "ON";
    res.json({
        message: "Lamp turned ON",
        status: poleData.lampStatus
    });
});

// Turn lamp OFF
app.post("/api/lamp/off", (req, res) => {
    poleData.lampStatus = "OFF";
    res.json({
        message: "Lamp turned OFF",
        status: poleData.lampStatus
    });
});

// Calculate power
app.get("/api/power", (req, res) => {
    poleData.power = poleData.voltage * poleData.current;
    res.json({ power: poleData.power });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Smart Pole Server running on port ${PORT}`);
});
