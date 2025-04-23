const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: { type: String, default: "Không có mô tả" },
    price: { type: Number, default: 0 },
    sizes: { type: [String], default: ["s", "m", "l", "xl"] },
    toppings: Array,
    image: { type: String, default: "../../public/img/default_img.jpg" },
    category: {
        type: [String],
        default: ["other"]
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })


module.exports = mongoose.model("product", productSchema);