const coffeeServices = require("../services/CoffeeService");

const getAll = async (req, res) => {
    const data = await coffeeServices.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await coffeeServices.findById(req.params.id);
    res.json(data);
}
const create = async (req, res) => {
    const newCoffee = await coffeeServices.create(req.body);
    res.status(201).json(newCoffee);
}

module.exports = {getAll,getById,create};