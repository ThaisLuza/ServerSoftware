const productModel = require('../models/productModel');
const { erroHandler } = require('../utils/erroHandler');

const getAllProducts = async () => {
  const products = await productModel.getAllProducts();

  return products;
};

const getProductsById = async (id) => {
  const product = await productModel.getProductsById(id);

  if (!product) throw erroHandler(404, 'Product not found');

  return product;
};

const createProduct = async (codigo, descricao, preco, data_cadastro) => {
  const verifyProduct = await productModel.getProductByCodigo(codigo);

  if (verifyProduct) throw erroHandler(409, 'Product already exists');

  const newProduct = await productModel.createProduct(codigo, descricao, preco, data_cadastro);

  return newProduct;
};
 
const updateProduct = async (id, data) => {
  const verifyId = await productModel.getProductsById(id);

  if (!verifyId) throw erroHandler(404, 'Product not found');

  const newData = await productModel.updateProduct(id, data);

  return newData;
};

const deleteProduct = async (id) => {
  const verifyId = await productModel.getProductsById(id);

  if (!verifyId) throw erroHandler(404, 'Product not found');

  await productModel.deleteProduct(id);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};