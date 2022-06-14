const express = require('express'); 
const router  = express.Router();    
const userController = require('../controller/controllers')

 
 
router.get('/', )
 

router.post('/register', userController.userRegister)   

router.post('/login',userController.userlogin ) 

router.post('/getting', userController.getuser)

router.delete('/deleting/:_id', userController.delete)  
 
router.get('/list' ,userController.pagination )






 

   


 


module.exports = router; 

