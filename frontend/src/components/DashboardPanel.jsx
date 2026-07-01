import StatCard from "./StatCard";
import ApplicationChart from "./ApplicationChart";
import TrafficSummary from "./TrafficSummary";
import {
    Package,
    Network,
    Shield,
    Radio,
    Send,
    Ban
} from "lucide-react";
import ProtocolPieChart from "./ProtocolPieChart";

function DashboardPanel({ stats, applications }) {

    if (!stats) return null;

    const statCards = [
        {
            title: "Packets",
            value: stats.totalPackets,
            subtitle: "Packets Captured",
            icon: Package,
            gradient: "bg-gradient-to-br from-blue-600 to-blue-800"
        },
        {
            title: "TCP",
            value: stats.tcp,
            subtitle: "TCP Traffic",
            icon: Shield,
            gradient: "bg-gradient-to-br from-green-600 to-green-800"
        },
        {
            title: "UDP",
            value: stats.udp,
            subtitle: "UDP Traffic",
            icon: Radio,
            gradient: "bg-gradient-to-br from-purple-600 to-purple-800"
        },
        {
            title: "Connections",
            value: stats.connections,
            subtitle: "Unique Sessions",
            icon: Network,
            gradient: "bg-gradient-to-br from-orange-600 to-orange-800"
        },
        {
            title: "Forwarded",
            value: stats.forwarded,
            subtitle: "Allowed Packets",
            icon: Send,
            gradient: "bg-gradient-to-br from-cyan-600 to-cyan-800"
        },
        {
            title: "Blocked",
            value: stats.blocked,
            subtitle: "Dropped Packets",
            icon: Ban,
            gradient: "bg-gradient-to-br from-red-600 to-red-800"
        }
    ];

    return (

        <div className="mt-10 space-y-10">

            <div>

                <h2 className="text-3xl font-bold text-white mb-8">
                    Scan Results
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

                    {statCards.map(card => (

                        <StatCard
                            key={card.title}
                            {...card}
                        />

                    ))}

                </div>

            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

    <ProtocolPieChart
        stats={stats}
    />

    <ApplicationChart
        applications={applications}
    />
    <TrafficSummary
    stats={stats}
    applications={applications}
/>
</div>

        </div>

    );

}

export default DashboardPanel;