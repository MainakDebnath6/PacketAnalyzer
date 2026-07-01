const express = require("express");
const cors = require("cors");
require("dotenv").config();

const scanRoutes = require("./routes/scanRoutes");
const firewallRoutes = require("./routes/firewallRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/scan", scanRoutes);
app.use("/api/firewall", firewallRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Packet Analyzer Backend Running 🚀"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});