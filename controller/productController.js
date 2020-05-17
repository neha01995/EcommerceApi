const mongoose = require('mongoose');

const ProductSchema = require('../models/ProductSchema');

// module.exports.home = function(req, res){
//     res.json({"message": "welcome guys" });
// }

// for add the product
module.exports.productAdd = function(req, res){
    
    //creation of database
    ProductSchema.create(req.body, function(err, prod){
        if(err){
            console.log(err);
            return res.redirect('/');
        }
        return res.json({prod});
    });
}

// for fetching the product
module.exports.fetchProduct = function(req, res){

}

// For updating the product
module.exports.productUpdate = function(req, res){

}

// For deleting a product
module.exports.productDelete = function(req, res){

}