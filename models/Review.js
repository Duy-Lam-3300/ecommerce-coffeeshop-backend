

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Product" },
    rating: {type:Number,min:1,max:5},
    comment:{type:String,default:""},
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema);