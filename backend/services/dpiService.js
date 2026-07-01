const { spawn } = require("child_process");
const path = require("path");

exports.runDPI = (inputFile, outputFile) => {
    return new Promise((resolve, reject) => {

        const executable = path.join(
            __dirname,
            "../../cpp-engine/build/dpi_engine"
        );
        console.log("Executable:", executable);
        console.log("Input:", inputFile);
        console.log("Output:", outputFile);
        const process = spawn(executable, [inputFile, outputFile], {
    cwd: path.join(__dirname, "../../cpp-engine/build")
});
process.on("error", (err) => {
    console.error(err);
    reject(err);
});

        let stdout = "";
        let stderr = "";

        process.stdout.on("data", data => {
            stdout += data.toString();
        });

        process.stderr.on("data", data => {
            stderr += data.toString();
        });

        process.on("close", code => {

            if (code === 0) {
                resolve(stdout);
            } else {
                reject(stderr);
            }

        });

    });
};