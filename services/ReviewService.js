
const BaseService = require("./BaseService");
const review = require("../models/Review");

class ReviewService extends BaseService {
    constructor() {
        super(review);
    }
}

module.exports = new ReviewService();