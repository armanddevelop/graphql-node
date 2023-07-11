const CategoryService = require('../services/category.service');
const checkRolesGql = require('../utils/auth/checkRolesGql');
const checkJwtGql = require('../utils/auth/checkJwtGql');
const categories = new CategoryService();

const addCategory = async (_, { params }, context) => {
  try {
    const user = await checkJwtGql(context);
    checkRolesGql(user, 'admin', 'customer');
    return categories.create({
      ...params,
      imagen: params.image.href,
    });
  } catch (error) {
    console.error('[addCategoryError]:', error);

    return error;
  }
};

const getCategoryById = (_, { id }) => {
  try {
    return categories.findOne(id);
    //console.log('Esto vale category ', category);
  } catch (error) {
    console.error('[getCategoryByIdError]: ', error);
  }
};

module.exports = { addCategory, getCategoryById };
