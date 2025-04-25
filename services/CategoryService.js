const BaseService = require("./BaseService");
const category = require("../models/Category");

class CategoryService extends BaseService {
    constructor() {
        super(category)
    }
}

module.exports = new CategoryService();
