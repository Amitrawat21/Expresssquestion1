const mongoose = require('mongoose') 
const userSchema = new mongoose.Schema({ 
    username :{type : String , required : true, index:{unique : true}}, 
    password : { type :String , required : true},
    confirm_password: { type : String, required : true},
    email_id : { type :String, required : true, index:{unique : true}},
    first_name: String, 
    last_name : String,
})  
 

    

const userModel =  mongoose.model('userdata', userSchema)
module.exports=userModel
