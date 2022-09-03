const path = require('path');
const {File} = require('../models')

const fileUploadController = {
    imageUploadController : (req,res,next)=>{
        if(!req.file){
            return res.status(400).send({
                success: false,
                message: 'Please select an image to upload',
            })
        }
        //console.log(req.file);
        const fileData = {
            fileName: req.file.filename,
            fileSize: req.file.size,
            originalName: req.file.originalname,
            mimeType: req.file.mimetype,
            destination: req.file.destination,
            path: req.file.path

        }

        File.create(fileData).then(result=>{
            res.status(201).json({
                message:"image is upload successFully",
                imageData:fileData
            })
            
        }).catch(err=>{
            res.status(500).json({
                message:"some server error!!"
            })
        })

    },
    singleDocUpload: (req,res,next)=>{
            if(!req.file){
                return res.status(400).send({
                    success: false,
                    message: 'Please select an image to upload',
                })
            }
            //console.log(req.file);
            const fileData = {
                fileName: req.file.filename,
                fileSize: req.file.size,
                originalName: req.file.originalname,
                mimeType: req.file.mimetype,
                destination: req.file.destination,
                path: req.file.path
    
            }
            File.create(fileData).then(result=>{
                res.status(201).json({
                    message:"doc is upload successFully",
                    imageData:fileData
                })
                
            }).catch(err=>{
                res.status(500).json({
                    message:"some server error!!"
                })
            })
        
    },
    multipleFileUpload:(req,res,next)=>{
        const arrayFile = [];
    }
}
module.exports = fileUploadController;