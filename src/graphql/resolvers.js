const { logIn } = require('./auth.resolvers');
const { addCategory, getCategoryById } = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');
const {
  product,
  allProducts,
  getProductsByCategory,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');
const {
  hello,
  getStrings,
  getStringsParams,
  getNumbers,
} = require('./test.resolvers');

const CategoryNameType = new RegularExpression(
  'CategoryNameType',
  /^[a-zA-Z0-9]{3,8}$/
);

//GET = Query
//Todo lo de graphql es enviado por POST
//POST,PUT,DELETE, PATCH = Mutations
//List
//[Strings]
//[Int]
const resolvers = {
  Query: {
    getPerson: (_, { name, age }) =>
      `hello my name is ${name} and my age ${age}`,
    getInt: (_, { age }) => age,
    getFloat: () => 12.365,
    getString: () => 'palabra',
    getBoolean: () => true,
    getID: () => '1654613',
    product,
    allProducts,
    getCategoryById,
  },
  Mutation: {
    addCategory,
    addProduct,
    updateProduct,
    deleteProduct,
    logIn,
  },
  CategoryNameType,
  Category: {
    products: getProductsByCategory,
  },
};
const testResolvers = {
  Query: {
    hello,
    getStrings,
    getStringsParams,
    getNumbers,
  },
};

module.exports = { testResolvers, resolvers };
