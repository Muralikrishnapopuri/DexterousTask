//imports
const mongoose = require('mongoose');
//connecting string 
const mongo_url = "mongodb+srv://muralikrishna:muralikrishna@cluster0.ab3upmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongo_url)
.then(()=>{
    console.log('MongoDB Connected...')
}).catch((err)=>{
    console.log('Error While Connecting MongoDB...')
})