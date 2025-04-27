
const Order = require("../services/OrderService");

const getAll = async (req, res) => {
    const data = await Order.findAll();
    res.json(data);
}
const getById = async (req, res) => {
    const data = await Order.findById(req.params.id);
    res.json(data);
}
const update = async (req, res) => {
    const newData = await Order.update(req.params.id, req.body);
    res.status(201).json(newData)
}
const create = async (req, res) => {
    const newData = await Order.create(req.body);
    res.status(201).json(newData)
}

module.exports = { getAll, getById, create, update };