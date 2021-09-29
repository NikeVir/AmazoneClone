const express = require('express');
const router = express.Router()
const Product =require('../modules/searchProduct')
const signUpTemplateCopy = require('../modules/signupmodule')
router.post('/signup',(request,response) =>{
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password: request.body.password
    })
    signedUpUser.save().then(
        data =>{
            response.json(data)
        }
    ).catch(
        error =>{
            response.json(error)
        }
    )
})
router.get('/signin')
router.get('/search/:name',function(req,res){
    var regex = new RegExp(req.params.name,'i');
    Product.find({title:regex}).then((result)=>{
        res.status(200).json(result);
    })
})
module.exports = router