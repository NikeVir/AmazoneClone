const mongoose = require('mongoose');
const product_details = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title:{
        type: String,
        require: true
    },
    description:{
        type:String,
        require:true
    },
    images:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
})
module.exports = mongoose.model('product-details',product_details);