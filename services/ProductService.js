
const BaseService = require("./BaseService");
const product = require("../models/Product");

class ProductService extends BaseService {
    constructor() {
        super(product);
    }

    async findByName(name) {
        return this.model.find({ name: new RegExp(name, "i") });
    }
}

module.exports = new ProductService();