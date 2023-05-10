const { ApolloServer } = require('@apollo/server');
const { loadFiles } = require('@graphql-tools/load-files');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware } = require('@apollo/server/express4');
const { resolvers } = require('./resolvers');

const useGraphql = async (app) => {
  try {
    const server = new ApolloServer({
      typeDefs: await loadFiles('./src/**/*.graphql'),
      resolvers,
      playground: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      csrfPrevention: false,
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
