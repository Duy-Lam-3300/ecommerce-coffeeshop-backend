
const express = require("express");
const router = express.Router();

const OrderController = require("../../controllers/OrderController");

router.get("/", OrderController.getAll);
router.get("/:id", OrderController.getById);
router.post("/", OrderController.create);
router.put("/:id", OrderController.update);

module.exports = router;
module.exports.handler = serverless(router);
