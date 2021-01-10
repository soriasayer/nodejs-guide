const express = require('express')
const path = require('path')
const productsContorller = require('../controllers/products')

const router = express.Router()

router.get('/add-product', productsContorller.getAddProduct)

router.post('/add-product', productsContorller.postAddProduct)

module.exports = router
