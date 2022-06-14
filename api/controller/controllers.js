



const User = require('../model/userschema') 
const bcrypt = require('bcrypt');  

  
exports.userRegister  =   async(req,res, next)=>{   
    
    if(req.body.password == req.body.confirm_password){  
          
         
    const salt = await bcrypt.genSalt(10) 
    const hashedPassword = await bcrypt.hash(req.body.password,salt) 
    console.log(hashedPassword)
                  

const user = new User({   


    
    username : req.body.username, 
    password : hashedPassword, 
    confirm_password : hashedPassword,  
    email_id : req.body.email_id,
    first_name: req.body.first_name, 
    last_name : req.body.last_name 


}) 
user.save()  
.then(result=>{ 
    console.log(result);  
    res.status(200).json({ 
        newuser:result
    })
})  
.catch(err=>{ 
    console.log(err); 
    res.status(500).json({ 
        error :err
    })
})

    }  
 
} 
 
 
 
exports.userlogin = (req,res,next)=>{  User.find({username:req.body.username}) 
     
.exec()  
.then(user=>{ 
    if(user.length<1){ 
        return res.status(401).json({ 
            msg : "user not exit"
        })
    } 
    bcrypt.compare(req.body.password,user[0].password, async(err, result)=>{ 
        if(!result){ 
            return res.status(500).json({ 
                msg : "password matching fail"
            })
        } 
        if(result){ 
          const ans =  await User.findOne({username:req.body.username})  
          const access_token = ans._id.toString()
          res.status(200).send(access_token)
            
            }

        })
    })
}   
 
 
exports.getuser =   async(req, res , next)=>{  
     
   
      
    const ans =  await User.findById({_id:req.body._id})  
   
    res.status(200).send(ans)


} 


exports.delete = async(req, res , next)=>{  
     
   
    const id = req.params._id; 
    console.log(id)
  const ans =  await User.findByIdAndDelete({_id : id})  
 
  res.status(200).send(ans).json({ 
      msg : " data is deleted"
  })
    

}  
 
  
 exports.pagination  = async(req,res,next)=>{
    let page = 1
    let pageLimit  = 10; 
    const  usersss = await User.find().
    skip((page-1)*pageLimit).limit(pageLimit)  
    res.status(200).send(usersss)
        
    
   
 }

     
 



 