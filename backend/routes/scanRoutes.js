const express = require("express");
const multer = require("multer");

const {
    testScan,
    scanFile
} = require("../controllers/scanController");

const router = express.Router();

const storage = multer.diskStorage({

    destination: "uploads/",

    filename: (req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname);
    }

});

const upload = multer({storage});

router.get("/test",testScan);

router.post(
    "/upload",
    upload.single("pcap"),
    scanFile
);

module.exports = router;