'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('category', {
    category_name: DataTypes.STRING
  }, {});
  Category.associate = function (models) {
    // associations can be defined 
    Category.hasMany(models.products, { as: 'products' })
    console.log(models);
  };
  return Category;
};