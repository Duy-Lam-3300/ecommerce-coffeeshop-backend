
const express = require("express");
const router = express.Router();
const ProductController = require("../../controllers/ProductController");
const upload = require("../../middleware/upload");

router.get("/", ProductController.getAll);
router.get("/:id", ProductController.getById);
router.post("/", upload.single("image"), ProductController.create);
router.put("/:id", ProductController.update);

module.exports = router;

