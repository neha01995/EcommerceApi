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
    ProductSchema.find({}, function(err, prod){
        if(err){
            console.log(err);
            return res.redirect('/');
        }
        return res.json({data: {
            products: prod
        }});
    })

}

// For updating the product
module.exports.productUpdate = function(req, res){
    const num = parseInt(req.query.num);
    console.log("params", req.params.id);
    ProductSchema.findByIdAndUpdate(req.params.id, {$inc: {quantity: num}}, {new: true}, function(err, prods){
        if(err){
            console.log(err);
            return res.redirect("/");
        }else{
            return res.json({data: {
                product: prods,
                message: "Succesfully updated"
            }})
        }
    });
}

// For deleting a product
module.exports.productDelete = function(req, res){

}