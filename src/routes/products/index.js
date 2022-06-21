const express = require("express");
const productController = require("../../controllers/productController");
const validateData = require("../../utils/validData");
const routeProduct = express.Router();

routeProduct.get("/", productController.getAllProducts);

routeProduct.post("/", validateData, productController.createProduct);

routeProduct.get("/:id", productController.getProductsById);

routeProduct.put("/:id", validateData, productController.updateProduct);

routeProduct.delete("/:id", productController.deleteProduct);

module.exports = routeProduct;
