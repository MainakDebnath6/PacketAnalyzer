const { generateRuleFile } = require("./ruleFileGenerator");
const { spawn } = require("child_process");
const path = require("path");

exports.runDPI = (inputFile, outputFile) => {
    return new Promise((resolve, reject) => {

        const executable = path.join(
            __dirname,
            "../../cpp-engine/build/dpi_engine"
        );

        // Generate the latest rules file
        const rulesFile = generateRuleFile();

        console.log("Executable:", executable);
        console.log("Input:", inputFile);
        console.log("Output:", outputFile);
        console.log("Rules:", rulesFile);

        const process = spawn(executable, [
            inputFile,
            outputFile,
            "--rules",
            rulesFile
        ]);

        process.on("error", (err) => {
            console.error("DPI Engine Error:", err);
            reject(err);
        });

        let stdout = "";
        let stderr = "";

        process.stdout.on("data", (data) => {
            stdout += data.toString();
        });

        process.stderr.on("data", (data) => {
            stderr += data.toString();
        });

        process.on("close", (code) => {
            if (code === 0) {
                resolve(stdout);
            } else {
                reject(stderr || `DPI Engine exited with code ${code}`);
            }
        });

    });
};