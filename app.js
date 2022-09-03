const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const path = require('path')
const port = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(path.join(__dirname,'public')))

const imageUploadRoute = require('./routes/fileUploadRoute')

app.use('/upload',imageUploadRoute)

app.use('/',(req,res,next)=>{
    res.status(200)
    // render('index')
    .json({
        message:"Wellcome Everyone.........."
    });
})


app.listen(port,(req,res,next)=>{
    console.log("Server is created successfully")
})