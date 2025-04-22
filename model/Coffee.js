const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: String,
    price: Number
}, { timestamps: true })


module.exports = mongoose.model("Coffee", coffeeSchema);