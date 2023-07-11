const boom = require('@hapi/boom');

const checkJwtGql = async (context) => {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('your jwt nor allow :(');
  }
  return user;
};

module.exports = checkJwtGql;
