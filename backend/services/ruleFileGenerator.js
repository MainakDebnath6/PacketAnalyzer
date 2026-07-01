const fs = require("fs");
const path = require("path");

const jsonPath = path.join(
    __dirname,
    "../config/firewall_rules.json"
);

const rulesPath = path.join(
    __dirname,
    "../config/blocking_rules.txt"
);

function generateRuleFile() {
    const config = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

    const lines = [];

    // Blocked IPs
    lines.push("[BLOCKED_IPS]");
    (config.blockedIPs || []).forEach(ip => lines.push(ip));

    lines.push("");

    // Blocked Apps
    lines.push("[BLOCKED_APPS]");
    (config.blockedApps || []).forEach(app => lines.push(app));

    lines.push("");

    // Blocked Domains
    lines.push("[BLOCKED_DOMAINS]");
    (config.blockedDomains || []).forEach(domain => lines.push(domain));

    lines.push("");

    // Blocked Ports
    lines.push("[BLOCKED_PORTS]");
    (config.blockedPorts || []).forEach(port => lines.push(String(port)));

    fs.writeFileSync(rulesPath, lines.join("\n"));

    return rulesPath;
}

module.exports = {
    generateRuleFile
};