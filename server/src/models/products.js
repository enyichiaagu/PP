'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
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
    // Products.hasMany(models.Orderdetails, {
    //   foreignKey: 'products_id',
    //   as: 'orders'
    // });
    Products.belongsTo(models.category, { foreignKey: 'category_id', as: 'category' })
  };
  return Products;
};