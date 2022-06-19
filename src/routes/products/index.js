const express = require('express');
const productController = require('../../controllers/productController');


const routeProduct = express.Router();

routeProduct.get('/', productController.getAllProducts);

routeProduct.post('/', productController.createProduct);

routeProduct.get('/:id', productController.getProductsById);

routeProduct.put('/:id', productController.updateProduct);

routeProduct.delete('/:id', productController.deleteProduct);

module.exports = routeProduct;