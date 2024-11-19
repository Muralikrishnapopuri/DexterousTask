//Final Task(Dexterous)

//imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ProductRoutes = require("./Routes/ProductsRoutes")
//create app
const app=express();

//set Port
const PORT = 8080;
//connect Database
require("./Models/database")
//allowing all client scripting
app.use(cors());
//convert data into json 
app.use(bodyParser.json());
app.use('/products',ProductRoutes);
//run server
app.listen(PORT,()=>{
    console.log(`Server is running: http://localhost:${PORT}`);
})

