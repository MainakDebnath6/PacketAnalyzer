const fs = require("fs");
const path = require("path");

const rulesPath = path.join(__dirname, "..", "config", "firewall_rules.json");

const readRules = () =>
    JSON.parse(fs.readFileSync(rulesPath, "utf8"));

const saveRules = (data) =>
    fs.writeFileSync(rulesPath, JSON.stringify(data, null, 2));

exports.getRules = (req, res) => {
    res.json(readRules());
};

function add(type, value, res) {
    const data = readRules();

    if (!data[type]) data[type] = [];

    if (!data[type].includes(value))
        data[type].push(value);

    saveRules(data);
    res.json(data);
}

function remove(type, value, res) {
    const data = readRules();

    data[type] = (data[type] || []).filter(x => String(x) !== String(value));

    saveRules(data);
    res.json(data);
}

exports.addBlockedIP = (req, res) =>
    add("blockedIPs", req.body.ip, res);

exports.removeBlockedIP = (req, res) =>
    remove("blockedIPs", req.params.ip, res);

exports.addBlockedDomain = (req, res) =>
    add("blockedDomains", req.body.domain, res);

exports.removeBlockedDomain = (req, res) =>
    remove("blockedDomains", req.params.domain, res);

exports.addBlockedPort = (req, res) =>
    add("blockedPorts", Number(req.body.port), res);

exports.removeBlockedPort = (req, res) =>
    remove("blockedPorts", req.params.port, res);

exports.addBlockedApp = (req, res) =>
    add("blockedApps", req.body.app, res);

exports.removeBlockedApp = (req, res) =>
    remove("blockedApps", req.params.app, res);