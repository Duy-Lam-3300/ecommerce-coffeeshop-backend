const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, default: "Other" },
    slug: { type: String, default: "other" },
}, { timestamps: true })

module.exports = mongoose.model("category",categorySchema);