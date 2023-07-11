const boom = require('@hapi/boom');
const { models } = require('../db/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    try {
      const newCategory = await models.Category.create(data);
      return newCategory;
    } catch (error) {
      console.error('[createCategoryError]: ', error.errors[0].message);
      return error;
    }
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      //include: ['products'],
    });
    if (!category) {
      throw boom.notFound('category not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
    return { id };
  }
}

module.exports = CategoryService;
