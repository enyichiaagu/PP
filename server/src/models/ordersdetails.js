'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orderdetails = sequelize.define('ordersdetails', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER,
    order_price: DataTypes.FLOAT,
    product_name: DataTypes.STRING,
    qty: DataTypes.INTEGER
  }, {});
  Orderdetails.associate = function (models) {
    // associations can be defined here
    // Orderdetails.belongsTo(models.Products);
  };
  return Orderdetails;
};