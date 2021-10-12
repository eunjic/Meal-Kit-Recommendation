const mongoose = require('mongoose');






const Product = mongoose.model('Product', productSchema);

module.exports = { Product }