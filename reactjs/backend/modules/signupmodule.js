const mongoose =require('mongoose')
const signUpTemplate = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true,
        min:6
    },
    password:{
        type:String,
        required:true,
        min:6
    },
})
module.exports = mongoose.model('newtables',signUpTemplate)