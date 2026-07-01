import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid
} from "recharts";

function ApplicationChart({ applications }) {

    if (!applications || applications.length === 0)
        return null;

    const chartData = [...applications]
        .filter(app => app.name !== "Unknown")
        .sort((a, b) => b.count - a.count);

    return (

        <div className="mt-10 bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700">

            <h2 className="text-2xl font-bold mb-6">
    Application Distribution
</h2>

            <div className="h-[420px]">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart
                        data={chartData}
                        layout="vertical"
                        margin={{
                            top: 10,
                            right: 40,
                            left: 30,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid
                            stroke="#334155"
                            strokeDasharray="4 4"
                        />

                        <XAxis
                            type="number"
                            stroke="#CBD5E1"
                        />

                        <YAxis
                            type="category"
                            dataKey="name"
                            width={120}
                            stroke="#CBD5E1"
                        />

                        <Tooltip
                            cursor={{ fill: "#1E293B" }}
                            contentStyle={{
                                background: "#0F172A",
                                border: "1px solid #334155",
                                borderRadius: "10px",
                                color: "#fff"
                            }}
                        />

                        <Bar
                            dataKey="count"
                            fill="#3B82F6"
                            radius={[0, 8, 8, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ApplicationChart;