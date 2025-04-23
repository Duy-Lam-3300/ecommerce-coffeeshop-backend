const product = require("../services/ProductService");

const getAll = async (req, res) => {
    const data = await product.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await product.findById(req.params.id);
    res.json(data);
}
const create = async (req, res) => {
    const newProduct = await product.create(req.body);
    res.status(201).json(newProduct);
}
const update=async(req,res)=>{
    const newProduct=await product.update(req.params.id,req.body);
    res.status(201).json(newProduct)
}

module.exports = { getAll, getById, create,update };