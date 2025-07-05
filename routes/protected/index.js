const express = require("express");
const router = express.Router();
const verifyFirebaseToken = require("../../middleware/veryfileFirebaseToken");

router.get("/", verifyFirebaseToken, (req, res) => {
    res.status(200).json({
        success: true,
        message: "You are authenticated!",
        user: req.user,
    });
});
module.exports = router;

