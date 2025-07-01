const Product = require("../services/ProductService");
const cloudinary = require("../config/Cloudinary");


const getAll = async (req, res) => {
    const data = await Product.findAll();
    res.json(data);
}

const getById = async (req, res) => {
    const data = await Product.findById(req.params.id);
    res.json(data);
}
const create = async (req, res) => {
    try {
        let imgUrl = "";
        if (req.file) {
            if (!req.file.mimetype) {
                return res.status(400).json({ message: "File mimetype is missing!" });
            }
            const fileType = req.file.mimetype ? req.file.mimetype : 'image/jpeg';

            const fileStr = req.file.buffer.toString('base64');
            const uploadWithTimeOut = new Promise((resolve, reject) => {
                const timeout = setTimeout(() => reject(new Error("Time out while uploading image!!!")), 5000);
                cloudinary.uploader.upload(`data:${fileType};base64,${fileStr}`, { folder: "product" }, (error, result) => {
                    clearTimeout(timeout);
                    if (error) return reject(error);
                    resolve(result);
                });
            });
            const uploadResult = await uploadWithTimeOut;
            imgUrl = uploadResult.secure_url;
        }
        const newProduct = await Product.create({ ...req.body, image: imgUrl });
        res.status(201).json(newProduct);
    } catch (e) {
        console.log(e);
    }
}
const update = async (req, res) => {
    const newProduct = await Product.update(req.params.id, req.body);
    res.status(201).json(newProduct)
}

module.exports = { getAll, getById, create, update };