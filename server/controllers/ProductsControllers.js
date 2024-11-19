//import model
const ProductModel = require("../Models/ProductModel");

//create product route
const createProduct = async (req,res)=>{
    try{
        const body = req.body;
        const productImage = req?.file?req?.file?.path:null;
        body.productImage = productImage;
        const Product = new ProductModel(body);
        await Product.save();
        // console.log(body,"hello");
        res.status(200).json({
            message:'Product Uploaded...',
            success:true
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            message:'Intermal server Error',
            success:false,
            error:err
        })
    }
}

//get all products
const allProducts = async (req,res)=>{
    try{
        let data = await ProductModel.find();
        res.status(200).json(data);

    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message:'Intermal server Error',
            success:false,
            error:err
        })
    }
}

//exports routes
module.exports={
    createProduct,
    allProducts
}