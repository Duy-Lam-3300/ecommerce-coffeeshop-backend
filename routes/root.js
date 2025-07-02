const express = require("express");
const router = express.Router();
const path = require("path");


router.get(/^\/$|\/index\.html$/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "root", "index.html"));
})

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "root", "index.html"));
})

module.exports = router;

