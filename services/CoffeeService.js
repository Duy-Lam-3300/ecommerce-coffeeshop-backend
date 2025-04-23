
const BaseService = require("./BaseService");
const Coffee = require("../models/Coffee");

class CoffeeService extends BaseService {
    constructor() {
        super(Coffee);
    }

    async findByName(name) {
        return this.model.find({ name: new RegExp(name, "i") });
    }
}

module.exports = new CoffeeService();