//import 
const { createProduct, allProducts } = require("../controllers/ProductsControllers");
const {cloudinaryFileUploader} = require("../Middleware/FileUploader")

//main router
const router = require('express').Router();
//product upload route
router.post('/',cloudinaryFileUploader.single('productImage'),createProduct);
//get all products
router.get('/',allProducts);

module.exports = router;