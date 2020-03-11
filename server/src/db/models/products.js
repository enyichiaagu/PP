'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    product_name: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
    discount_price: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    imgurl: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {});
  Products.associate = function (models) {
    // associations can be defined here
    Products.hasMany(models.Orderdetails);
    Products.belongsTo(models.Category);
  };
  return Products;
};