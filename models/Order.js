
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true
        },
        quantity: { type: Number, default: 0 },
        price: { type: Number, default: 0 },
    }],
    totalPrice: { type: Number, default: 0 },
    status: { type: String, enum: ["pending", "preparing", "completed", "cancelled"], dafault: "pending" },
    paymentMethod: { type: String, enum: ["cash", "momo", "vnpay", "card"], dafault: "cash" }
}, { timestamps: true })

module.exports = mongoose.model("Order", orderSchema);