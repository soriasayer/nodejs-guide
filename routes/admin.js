const express = require('express')
const path = require('path')
const adminController = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminController.getAddProduct)
router.get('/edit-product', adminController.getAddProduct)
router.get('/products', adminController.getAddProduct)

router.post('/add-product', adminController.postAddProduct)

module.exports = router
