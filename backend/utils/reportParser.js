exports.parseReport = (report) => {

    const stats = {};

    const get = (regex) => {
        const match = report.match(regex);
        return match ? Number(match[1]) : 0;
    };

    stats.totalPackets = get(/Total Packets:\s+(\d+)/);
    stats.totalBytes = get(/Total Bytes:\s+(\d+)/);
    stats.tcp = get(/TCP Packets:\s+(\d+)/);
    stats.udp = get(/UDP Packets:\s+(\d+)/);
    stats.forwarded = get(/Forwarded:\s+(\d+)/);
    stats.blocked = get(/Dropped\/Blocked:\s+(\d+)/);
    stats.connections = get(/Total Connections:\s+(\d+)/);

    const apps = [];

    const lines = report.split("\n");

    let inside = false;

    for (const line of lines) {

        if (line.includes("APPLICATION DISTRIBUTION")) {
            inside = true;
            continue;
        }

        if (!inside) continue;

        const match = line.match(/║\s*([A-Za-z0-9\/\-\.\+ ]+?)\s+(\d+)\s+/);

        if (match) {

            apps.push({

                name: match[1].trim(),
                count: Number(match[2])

            });

        }

    }

    return {

        stats,
        applications: apps

    };

};