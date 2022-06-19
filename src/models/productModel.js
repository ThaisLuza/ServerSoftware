const connection = require("./connection");

const getAllProducts = async () => {
  const query = "SELECT * FROM ServerSoftwares.produtos ORDER BY id";
  const [products] = await connection.execute(query);

  return products;
};

const getProductsById = async (id) => {
  const query = "SELECT * FROM ServerSoftwares.produtos WHERE id=?";
  const [product] = await connection.execute(query, [id]);

  if (product.length === 0) return null;

  return product[0];
};

const getProductByCodigo = async (codigo) => {
  const query = 'SELECT * FROM ServerSoftwares.produtos WHERE codigo=?';

  const [product] = await connection.execute(query, [codigo]);

  return product[0];
};

const createProduct = async (codigo, descricao, preco, data_cadastro) => {
  const query =
    "INSERT INTO ServerSoftwares.produtos (codigo, descricao, preco, data_cadastro) VALUES (?,?,?,?)";
  const [newId] = await connection.execute(query, [
    codigo,
    descricao,
    preco,
    data_cadastro,
  ]);

  const newProduct = {
    id: newId.insertId,
    codigo,
    descricao,
    preco,
    data_cadastro,
  };

  return newProduct;
};

const updateProduct = async (id, { codigo, descricao, preco, data_cadastro }) => {
  const query =
    "UPDATE ServerSoftwares.produtos SET codigo = ?, descricao = ?, preco = ?, data_cadastro = ? WHERE id = ?";
  const newData = await connection.execute(query, [codigo, descricao, preco, data_cadastro, id]);

  if (newData.length === 0) return null;

  return {
    id,
    codigo, descricao, preco, data_cadastro
  };
};

const deleteProduct = async (id) => {
  await connection.execute(
    "DELETE FROM ServerSoftwares.produtos WHERE id = ?",
    [id]
  );
  // const delete = await connection.execute(query,[id])
};

module.exports = {
  getAllProducts,
  getProductsById,
  getProductByCodigo,
  createProduct,
  updateProduct,
  deleteProduct,
};
