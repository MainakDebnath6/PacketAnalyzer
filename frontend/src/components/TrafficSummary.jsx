import {
    CheckCircle,
    AlertTriangle,
    Activity
} from "lucide-react";

function TrafficSummary({ stats, applications }) {

    if (!stats) return null;

    const topApplication =
        applications.length > 0
            ? [...applications].sort((a, b) => b.count - a.count)[0]
            : null;

    return (

        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">

            <h2 className="text-2xl font-bold mb-8">
                Traffic Summary
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

                <div className="flex gap-4">

                    <Activity className="text-cyan-400" size={30}/>

                    <div>

                        <p className="text-gray-400">
                            Top Application
                        </p>

                        <h3 className="text-xl font-bold mt-2">
                            {topApplication?.name ?? "N/A"}
                        </h3>

                    </div>

                </div>

                <div className="flex gap-4">

                    <CheckCircle
                        className="text-green-400"
                        size={30}
                    />

                    <div>

                        <p className="text-gray-400">
                            Forwarded
                        </p>

                        <h3 className="text-xl font-bold mt-2">
                            {stats.forwarded}
                        </h3>

                    </div>

                </div>

                <div className="flex gap-4">

                    <AlertTriangle
                        className="text-red-400"
                        size={30}
                    />

                    <div>

                        <p className="text-gray-400">
                            Blocked
                        </p>

                        <h3 className="text-xl font-bold mt-2">
                            {stats.blocked}
                        </h3>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default TrafficSummary;