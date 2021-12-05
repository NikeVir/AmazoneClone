const express = require('express');
const router = express.Router()
const mongoose =require('mongoose')
const Product =require('../modules/searchProduct')

router.get('/search/:name',function(req,res){
    var regex = new RegExp(req.params.name,'i');
    var success = true;
    Product.find({title:regex}).then((result)=>{
        if(result.length == 0){
            success =  false;
            return res.json(success)
        }
        res.status(200).json(result);
    })
})
router.get('/searchcategory/:name',function(req,res){
    var regex = new RegExp(req.params.name,'i');
    var success = true;
    Product.find({description:regex}).then((result)=>{
        if(result.length == 0){
            success = false;
            res.json(success)
        }
        res.status(200).json(result);
    })
})
router.post('/add',function(req,res){
    const addProduct = new Product({
        _id:new mongoose.Types.ObjectId(),
        title: req.body.title,
        description:req.body.description,
        images:req.body.images,
        price:req.body.price

    })
    addProduct.save().then(
        data =>{
            res.json(data);
        }
    ).catch(
        error =>{
            res.json(error)
        }
    )
})

module.exports = router;