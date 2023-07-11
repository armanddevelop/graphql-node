const ProductService = require('./../services/product.service');

const Product = new ProductService();

const product = async (_, { id }) => {
  const data = await Product.findOne(id);
  return data;
};

const allProducts = async (_, args) => {
  const data = await Product.find({});
  return data;
};

const addProduct = async (_, { params }) => {
  const data = await Product.create(params);
  return data;
};
const updateProduct = async (_, { id, changes }) => {
  const data = await Product.update(id, changes);
  return data;
};
const deleteProduct = async (_, { id }) => {
  const data = await Product.delete(id);
  return data;
};
const getProductsByCategory = async (parent) => {
  const {
    dataValues: { id },
  } = parent;
  return await Product.getByCategory(id);
};
module.exports = {
  product,
  allProducts,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
};
