const express = require('express'); 
const app  = express();  
const userRoute = require('./api/route/router')  
const mongoose = require("mongoose");   
 const bodyParser = require('body-parser')
 

mongoose.connect('mongodb://127.0.0.1/blog') 
mongoose.connection.on('error', err=>{ 
    console.log('connection failed')
})
  
 
app.use(bodyParser.urlencoded({extended: false})) 
app.use(bodyParser.json());
 

app.use('/user' , userRoute) 
app.use((req,res,next)=>{ 
    res.status(404)
}); 
mongoose.connection.on('connected', connected=>{ 
    console.log('connected with databse')
})
 

app.use((req,res,next)=> { 
    res.status(200).json({ 
        error:'bad request'
    })

}) 
 
module.exports = app; 
