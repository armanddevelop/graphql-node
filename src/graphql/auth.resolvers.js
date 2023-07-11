const AuthService = require('../services/auth.service');

const auth = new AuthService();
const logIn = async (_, { email, password }, context) => {
  try {
    const { user } = await context.authenticate('graphql-local', {
      email,
      password,
    });
    if (user) {
      return auth.signToken(user);
    }
  } catch (error) {
    console.error('[logInError]: ', error);
    return error;
  }
};

module.exports = { logIn };
