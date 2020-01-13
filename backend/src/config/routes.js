const express = require('express')

module.exports = function(server) {

    // Definir URL base para todas as rotas 
    const router = express.Router()
    server.use('/api', router)

    // Rotas de Produtos
    const Products = require('../api/products/productsService')
    Products.register(router, '/products')
}