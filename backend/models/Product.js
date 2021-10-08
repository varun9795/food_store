const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },

    img: {
        type: String,
        required:true
        
    },
    title: {
        type: String,
        required:true
        
    },
    category: {
        type: String,
        required:true
        
    },
    price: {
        type:String,
        required:true
        
    },
    info: {
        type: String,
        required:true
        
    }
   
})

const Product = mongoose.model("product", productSchema);

module.exports = Product;