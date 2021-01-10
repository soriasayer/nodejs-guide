const express = require('express')
const path = require('path')
const productsContorller = require('../controllers/products')
const router = express.Router()

router.get('/', productsContorller.getProducts)

module.exports = router
