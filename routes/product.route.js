const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');
const { getProducts,getProduct,createProduct,updateProduct,deleteProduct } = require('../controllers/product.controller');

router.get('/', getProducts);
router.get('/:id', getProduct);

//Create Product
router.post('/',createProduct);

//Update Product
router.put('/:id',updateProduct);

//Delete Product
router.delete('/:id',deleteProduct);



module.exports = router;