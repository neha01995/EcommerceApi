const express = require("express");
const router = express.Router();

const productController = require("../controller/productController");

router.get("/", productController.fetchProduct);
router.post("/create", productController.productAdd);
router.post("/:id/update_quantity", productController.productUpdate);
router.delete("/:id", productController.productDelete);

module.exports = router;