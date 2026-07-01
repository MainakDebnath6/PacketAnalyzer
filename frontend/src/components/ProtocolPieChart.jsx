import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const COLORS = [
    "#3B82F6",
    "#8B5CF6",
    "#10B981",
    "#F97316"
];

function ProtocolPieChart({ stats }) {

    if (!stats) return null;

    const data = [
        {
            name: "TCP",
            value: stats.tcp
        },
        {
            name: "UDP",
            value: stats.udp
        }
    ];

    return (

        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl border border-slate-700 h-full">

            <h2 className="text-2xl font-bold mb-6">
                Protocol Distribution
            </h2>

            <div className="h-[420px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            innerRadius={70}
                            outerRadius={120}
                            paddingAngle={4}
                        >

                            {data.map((entry, index) => (

                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />

                            ))}

                        </Pie>

                        <Tooltip
                            contentStyle={{
                                background: "#0F172A",
                                border: "1px solid #334155",
                                borderRadius: "10px",
                                color: "white"
                            }}
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>

    );

}

export default ProtocolPieChart;