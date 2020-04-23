'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define('customers', {
    fn: DataTypes.STRING,
    ln: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    tel: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
    country: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  Customers.associate = function (models) {
    // associations can be defined here
    // Customers.hasMany(models.Orders, {
    //   foreignKey: 'customer_id',
    //   as: 'orders'
    // });
  };
  return Customers;
};