//서버에 올릴때 데이터베이스 건들일거면 moongoose 넣어주기
const mongoose = require('mongoose');



const productSchema = mongoose.Schema({

    
    item: {
        type:String,
    }
    
})




const Product = mongoose.model('Product', productSchema);

module.exports = { Product }