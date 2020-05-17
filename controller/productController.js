const mongoose = require('mongoose');

const ProductSchema = require('../models/ProductSchema');

module.exports.home = function(req, res){
    res.json({"message": "welcome guys" });
}