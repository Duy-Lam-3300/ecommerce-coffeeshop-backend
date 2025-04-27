
const Review = require("../services/ReviewService");

const getAll = async (req, res) => {
    const data = await Review.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await Review.findById(req.params.id);
    res.json(data);
}

const create = async (req, res) => {
    const newData = await Review.create(req.body);
    res.status(201).json(newData);
}

const update = async (req, res) => {
    const newData = await Review.update(req.params.id, req.body);
    res.status(201).json(newData);
}

module.exports = { getAll, getById, create, update };