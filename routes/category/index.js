
const express = require("express");
const router = express.Router();
const CategoryController = require("../../controllers/CategoryController");

router.get("/", CategoryController.getAll);
router.get("/:id", CategoryController.getById);
router.post("/", CategoryController.create);
router.put("/:id", CategoryController.update);

module.exports = router;

