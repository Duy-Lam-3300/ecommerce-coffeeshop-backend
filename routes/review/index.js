
const express = require("express");
const router = express.Router();

const ReviewController = require("../../controllers/ReviewController");

router.get("/", ReviewController.getAll);
router.get("/:id", ReviewController.getById);
router.post("/", ReviewController.create);
router.put("/:id", ReviewController.update);

module.exports = router;

