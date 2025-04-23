
const BaseService = require("./BaseService");
const Product = require("../models/Product");

class ProductService extends BaseService {
    constructor() {
        super(Product);
    }

    async findByName(name) {
        return this.model.find({ name: new RegExp(name, "i") });
    }
}

module.exports = new ProductService();