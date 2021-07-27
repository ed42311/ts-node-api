const express = require('express')
const router = express.Router()

const products = [
    {id: 1, name: 'Product 1', price: 100},
    {id: 2, name: 'Product 2', price: 80},
    {id: 3, name: 'Product 3', price: 20},
];

router.get('/all', function (req, res) {
    res.json(products)
})

router.get('/one/:id', function (req, res) {
    const oneProduct = products[req.params.id-1]
    res.json(oneProduct)
})

router.post('/new', function (req, res) {
    // curl -X POST -H 'Content-Type: application/json' -d '{"username":"davidwalsh","password":"something"}' http://localhost:3000/product/new
    console.log(req.body);
    products.push(req.body)
    res.json(products)
})

module.exports = router