//imports
const mongoose = require("mongoose");
//create model schema for product
const ProductSchema = new mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Des:{
        type:String,
        require:true
    },
    productImage:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        require:true
    },
    Discount:{
        type:Number,
        require:true
    }
});
const ProductModel = mongoose.model('dexterous',ProductSchema);
module.exports = ProductModel;