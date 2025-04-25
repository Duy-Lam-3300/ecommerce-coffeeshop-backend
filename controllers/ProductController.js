const Product = require("../services/ProductService");

const getAll = async (req, res) => {
    const data = await Product.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await Product.findById(req.params.id);
    res.json(data);
}
const create = async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
}
const update=async(req,res)=>{
    const newProduct=await Product.update(req.params.id,req.body);
    res.status(201).json(newProduct)
}

module.exports = { getAll, getById, create,update };