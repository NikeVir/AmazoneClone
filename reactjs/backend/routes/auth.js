const express = require('express');
const jwt =require("jsonwebtoken")
const router = express.Router()
const {registerValidation,loginValidation} = require("../modules/validation")
const signUpTemplateCopy = require('../modules/signupmodule')
const bcrypt = require("bcryptjs")
router.post('/registered',async(request,response) =>{

    const {error} = registerValidation(request.body);
    if(error)  return response.status(400).send(error.details[0].message);
    
    const emailExist = await signUpTemplateCopy.findOne({email: request.body.email})
    if(emailExist) return response.status(400).send("email already exist")

    const salt = await bcrypt.genSalt(10)
    const  hashedPassword =await bcrypt.hash(request.body.password, salt)
    const signedUpUser = new signUpTemplateCopy({
        fullName: request.body.fullName,
        email:request.body.email,
        password: hashedPassword
    })
    try{
        const saveUser = await signedUpUser.save();
        response.send({signedUpUser:saveUser._id});
    } catch(err){
            response.status(400).send(err);
        }
})
router.post('/login',async(request,response)=>{
    const {error} =loginValidation(response.body);
    if(error) return response.status(400).send(error.details[0].message);
     
    const user = await signUpTemplateCopy.findOne({email: request.body.email});
    if(!user) return response.status(400).send("email or password is wrong");

    const validPass = await bcrypt.compare(request.body.password,user.password);
    if(!validPass) return response.status(400).send("invalid password")

    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
    response.header('auth-token',token).send(token);
    // response.send('Logged in!');
})
module.exports = router;