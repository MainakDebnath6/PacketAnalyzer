const express = require("express");

const {
    getRules,
    addBlockedIP,
    removeBlockedIP,
    addBlockedDomain,
    removeBlockedDomain,
    addBlockedPort,
    removeBlockedPort,
    addBlockedApp,
    removeBlockedApp
} = require("../controllers/firewallController");

const router = express.Router();

// Get all rules
router.get("/", getRules);

// IP
router.post("/ip", addBlockedIP);
router.delete("/ip/:ip", removeBlockedIP);

// Domain
router.post("/domain", addBlockedDomain);
router.delete("/domain/:domain", removeBlockedDomain);

// Port
router.post("/port", addBlockedPort);
router.delete("/port/:port", removeBlockedPort);

// Application
router.post("/app", addBlockedApp);
router.delete("/app/:app", removeBlockedApp);

module.exports = router;