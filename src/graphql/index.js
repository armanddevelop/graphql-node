const { ApolloServer } = require('@apollo/server');
const { loadFiles } = require('@graphql-tools/load-files');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('@apollo/server-plugin-landing-page-graphql-playground');
const {
  typeDefs: scarlarsTypeDefinitions,
  resolvers: scalarsResolvers,
} = require('graphql-scalars');
const { expressMiddleware } = require('@apollo/server/express4');
const { buildContext } = require('graphql-passport');
const { resolvers } = require('./resolvers');

const useGraphql = async (app) => {
  const typeDefs = [
    ...(await loadFiles('./src/**/*.graphql')),
    scarlarsTypeDefinitions,
  ];
  const allResolvers = [resolvers, scalarsResolvers];
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers: allResolvers,
      playground: true,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      csrfPrevention: false,
    });
    await server.start();
    app.use(
      expressMiddleware(server, {
        context: async ({ req, res }) => buildContext({ req, res }),
      })
    );
  } catch (error) {
    console.error('[useGraphqlError]: ', error);
  }
};

module.exports = useGraphql;
