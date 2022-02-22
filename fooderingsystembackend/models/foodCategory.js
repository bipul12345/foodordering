const mongoose = require('mongoose');

const foodcategorySchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    catImg:{
        type:String,
    },

},{timestamps:true});

module.exports=mongoose.model('FoodCategory',foodcategorySchema);