'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category_name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined 
    Category.hasMany(models.Products);
  };
  return Category;
};