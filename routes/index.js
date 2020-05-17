const express = require("express");

const router = express.Router();
const productController = require('../controller/productController');

// router.get('/', hone.home);

router.use('/products', require('./product'));
// router.get('/', (req, res) => {
//     res.json({"message": "welcome guys" });
// });

module.exports = router;