import { useState } from "react";
import { uploadPcap } from "../services/api";
import DashboardPanel from "./DashboardPanel";
import LoadingOverlay from "./LoadingOverlay";

function FileUpload() {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const [report, setReport] = useState("");
    const [stats, setStats] = useState(null);
    const [applications, setApplications] = useState([]);

    const handleUpload = async () => {

        if (!file) {
            alert("Choose a PCAP file");
            return;
        }

        try {

            setLoading(true);

            const data = await uploadPcap(file);

            setReport(data.report);
            setStats(data.stats);
            setApplications(data.applications);

        } catch (err) {

            console.error(err);
            alert("Upload failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <>

            <LoadingOverlay loading={loading} />

            <div className="bg-slate-800 rounded-xl p-8 shadow">

                <h2 className="text-2xl font-bold mb-6">
                    Upload PCAP File
                </h2>

                <input
                    id="pcapFile"
                    type="file"
                    accept=".pcap"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <label
                    htmlFor="pcapFile"
                    className="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-blue-500 rounded-xl cursor-pointer hover:bg-slate-700 transition"
                >

                    <div className="text-6xl">
                        📁
                    </div>

                    <p className="text-xl font-semibold mt-4">
                        Click here to choose a PCAP file
                    </p>

                    <p className="text-gray-400 mt-2">
                        Supported format: .pcap
                    </p>

                    {file && (

                        <div className="mt-5 bg-green-600 px-4 py-2 rounded-lg">

                            ✅ {file.name}

                        </div>

                    )}

                </label>

                <button
                    onClick={handleUpload}
                    disabled={!file || loading}
                    className={`mt-8 px-8 py-3 rounded-lg font-bold transition ${
                        !file || loading
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                    }`}
                >
                    Analyze Packet
                </button>

                <DashboardPanel
                    stats={stats}
                    applications={applications}
                    report={report}
                />

                {applications.length > 0 && (

                    <div className="mt-10">

                        <h2 className="text-2xl font-bold mb-5">
                            Detected Applications
                        </h2>

                        <div className="space-y-2">

                            {applications.map((app, index) => (

                                <div
                                    key={index}
                                    className="flex justify-between bg-slate-700 rounded-lg px-5 py-3"
                                >

                                    <span>{app.name}</span>

                                    <span className="font-bold">
                                        {app.count}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                )}

                {report && (

                    <details className="mt-10">

                        <summary className="cursor-pointer text-lg font-semibold mb-3">
                            View Raw Engine Report
                        </summary>

                        <pre className="bg-black p-4 rounded-lg overflow-auto text-green-400 text-sm whitespace-pre-wrap">
                            {report}
                        </pre>

                    </details>

                )}

            </div>

        </>

    );

}

export default FileUpload;