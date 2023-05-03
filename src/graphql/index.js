const { ApolloServer } = require('@apollo/server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');

const typeDefs = `
  type Query{
    hello:String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hola chue',
  },
};

const useGraphql = async (app) => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      playground: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
    });
    await server.start();
    app.use(
      expressMiddleware(server, {
        context: async ({ req }) => ({
          token: req.headers.token,
        }),
      })
    );
  } catch (error) {
    console.error('[useGraphqlError]: ', error);
  }
};

module.exports = useGraphql;
