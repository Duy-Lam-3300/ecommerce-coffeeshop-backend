const mongoose = require("mongoose");

const coffeSchema = new mongoose.Schema({
    name: String,
    image_uri: String,
    category_id: String,
}, { timestamps: true })


module.exports = mongoose.model("Coffe", coffeSchema);