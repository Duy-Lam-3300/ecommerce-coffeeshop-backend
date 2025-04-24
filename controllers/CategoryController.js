const category = require("../services/CategoryService");


const getAll = async (req, res) => {
    const data = await category.findAll();
    res.json(data);
}


const getById = async (req, res) => {
    const data = await category.findById(req.params.id);
    res.json(data)
}

const create = async (req, res) => {
    const newData = await category.create(req.body);
    res.status(201).json(newData);
}

const update = async (req, res) => {
    const newData = await category.update(req.params.id, req.body);
    res.status(201).json(newData)
}

module.exports = { getAll, getById, create, update }