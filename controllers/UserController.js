
const User = require("../services/UserService");

const getAll = async (req, res) => {
    const data = await User.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await User.getById(req.params.id);
    res.json(data);
}

const create = async (req, res) => {
    const newData = await User.create(req.params.id);
    res.status(201).json(newData);
}

const update=async(req,res)=>{
    const newData=await User.update(req.params.id,req.body);
    res.status(201).json(newData);
}

module.exports = {getAll,getById,create,update};