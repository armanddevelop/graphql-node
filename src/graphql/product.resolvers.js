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
  console.log(params);
  const data = await Product.create(params);
  return data;
};

module.exports = {
  product,
  allProducts,
  addProduct,
};
