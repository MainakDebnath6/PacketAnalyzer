const path = require("path");
const { runDPI } = require("../services/dpiService");

exports.scanFile = async (req, res) => {
    console.log("Request received");

    console.log(req.file);
    try {

        const input = req.file.path;

        const output = path.join(
            __dirname,
            "../reports/output.pcap"
        );

        const report = await runDPI(input, output);

        res.json({
            success: true,
            report
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            error: err
        });

    }

};

exports.testScan = (req,res)=>{
    res.json({
        success:true,
        message:"Scan API is working!"
    });
}