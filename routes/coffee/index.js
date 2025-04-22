const express = require("express");
const router = express.Router();
const path = require("path");
const Coffee = require(path.join(__dirname, "..", "..", "model", "Coffee"));

router.post("/", async (req, res) => {
    try {
        const newCoffee = await Coffee.create(req.body);
        res.status(201).json(newCoffee);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
})



module.exports=router;