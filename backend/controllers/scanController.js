const path = require("path");
const { runDPI } = require("../services/dpiService");
const { parseReport } = require("../utils/reportParser");

exports.scanFile = async (req, res) => {
    console.log("Request received");
    console.log(req.file);

    try {
        const input = path.resolve(req.file.path);

        const output = path.join(
            __dirname,
            "../reports/output.pcap"
        );

        const report = await runDPI(input, output);

        const parsed = parseReport(report);

        res.json({
            success: true,
            report,
            ...parsed
        });

    } catch (err) {
        console.error(err);

        res.status(500).json({
            success: false,
            error: err.toString()
        });
    }
};

exports.testScan = (req, res) => {
    res.json({
        success: true,
        message: "Scan API is working!"
    });
};