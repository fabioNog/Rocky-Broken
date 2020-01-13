const Products = require('./products')


Products.methods(['get', 'post', 'put', 'delete'])
Products.updateOptions({new: true, runValidators: true})

//Função que coleta o dados do database broken 
//e ordena os pela categoria
Products.route('category', (req, res, next) => {
    Products.aggregate({
        $sort: {category: 1 }
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result)
        }
    })
})

//Função que coleta o dados do database broken 
//e ordena-os pelo id
Products.route('id', (req, res, next) => {    
    Products.aggregate({
        $sort: {id: 1 }
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result)
        }
    })
})



//Função que soma todas as quantidade de produto.
//Soma também todos os preços destes produtos 
//e me retorna um vertor com estas somas [price,quantity]

Products.route('summary', (req, res, next) => {
    Products.aggregate({
        $project: {price: {$sum: "$price"}, quantity: {$sum: "$quantity"}}
    }, {
        $group: {_id: null, price: {$sum: "$price"}, quantity: {$sum: "$quantity"}}
    }, {
        $project: {_id: 0, price: 1, quantity: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { price: 0, quantity: 0 })
        }
    })
})

module.exports = Products