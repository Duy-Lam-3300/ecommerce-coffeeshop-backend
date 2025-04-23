// const express = require("express");
// const router = express.Router();
// const path = require("path");
// const Coffee = require(path.join(__dirname, "..", "..", "models", "Coffee"));

// router.post("/", async (req, res) => {
//     try {
//         console.log(req.body);
//         const newCoffee = await Coffee.create(req.body);
//         res.status(201).json(newCoffee);
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// })

// router.get("/", async (req, res) => {
//     try {
//         const coffees = await Coffee.find();
//         res.json(coffees)

//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// })

// router.get("/:id", async (req, res) => {
//     try {
//         const coffee = await Coffee.findById(req.params.id)
//         res.json(coffee);
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// })

// router.put("/:id", async (req, res) => {
//     try {

//         const updatedCoffee = await Coffee.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedCoffee);
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// })

// router.delete("/:id", async (req, res) => {
//     try {
//         const deleted = await Coffee.findByIdAndDelete(req.params.id);
//         res.json({ message: "Delete successfully" });
//     } catch (e) {
//         res.status(500).json({ error: e.message });
//     }
// })


// module.exports = router;


const express = require("express");
const router = express.Router();
const CoffeeController = require("../../controllers/CoffeeController");

router.get("/", CoffeeController.getAll);
router.get("/:id", CoffeeController.getById);
router.post("/", CoffeeController.create);

module.exports = router;