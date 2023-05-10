const { product, allProducts, addProduct } = require('./product.resolvers');
const {
  hello,
  getStrings,
  getStringsParams,
  getNumbers,
} = require('./test.resolvers');
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
  },
  Mutation: {
    addProduct,
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
