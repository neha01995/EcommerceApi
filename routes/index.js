const express = require("express");

const router = express.Router();
const hone = require('../controller/productController');

router.get('/', hone.home);

// router.get('/', (req, res) => {
//     res.json({"message": "welcome guys" });
// });

module.exports = router;