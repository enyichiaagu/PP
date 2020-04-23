'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
    customer_id: DataTypes.INTEGER,
    order_amount: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    order_ship_name: DataTypes.STRING,
    order_ship_address: DataTypes.STRING,
    order_city: DataTypes.STRING,
    order_phone: DataTypes.STRING,
    order_email: DataTypes.STRING,
    order_shipped: DataTypes.BOOLEAN,
    order_tracking_no: DataTypes.STRING,
    payment_type: DataTypes.STRING
  }, {});
  Orders.associate = function (models) {
    // associations can be defined here
    // Orders.belongsTo(models.Customers);
  };
  return Orders;
};