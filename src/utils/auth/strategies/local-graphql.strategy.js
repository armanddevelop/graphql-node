const { GraphQLLocalStrategy } = require('graphql-passport');
const AuthService = require('../../../services/auth.service');
const service = new AuthService();

const _checkUser = async (email, password, done) => {
  try {
    const user = await service.getUser(email, password);
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};
const GQLLocalStrategy = new GraphQLLocalStrategy(_checkUser);

module.exports = GQLLocalStrategy;
