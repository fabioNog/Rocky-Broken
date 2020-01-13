const restful = require('node-restful')
const mongoose = restful.mongoose


const productsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, min: 1, required: true },
    price: { type: Number, min: 1, required: true },
    category: { type: String, required: true },
})

module.exports = restful.model('products', productsSchema)