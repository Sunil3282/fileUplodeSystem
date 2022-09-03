const express = require('express');
const helper = require('../middleware/fileupload');
const fileUploadController = require('../controllers/fileUploadControllers');
const uploadSingleImage = helper.imageUpload.single('myFile');
const uploadSingledoc = helper.docUpload.single('docFile')

//imageUpload.single('file')
const route = express.Router();

route.post('/image',uploadSingleImage,fileUploadController.imageUploadController)
route.post('/doc',uploadSingledoc,fileUploadController.singleDocUpload)
// route.post('/', (req, res) => {
//     uploadSingleImage(req, res, (err) => {
//       if (err) {
//         return res.status(400).send({ success: false, message: err.message });
//       }
//       return fileUploadController.imageUploadController(req,res) 
//      // singleFileUpload(req, res);
//     });
//   });

module.exports = route;