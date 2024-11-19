//import cloudinary modules
const multer = require('multer');
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require("cloudinary").v2;
//connect our cloudinary account config with api key's
cloudinary.config({
    cloud_name:"dcnjbfhpg",
    api_key:"498729397119254",
    api_secret:"dKVRodkG7Qten9SdLCeuWfQJcdw"
});
//setup storage with a foldername
const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:'dexterous',
        format:async (req,file)=>'png',
        public_id:(req,file)=>file.originalname.split('.')[0]+""
    },
});
const cloudinaryFileUploader = multer({storage:storage});
module.exports={
    cloudinaryFileUploader
}