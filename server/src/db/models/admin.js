'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    fn: DataTypes.STRING,
    ln: DataTypes.STRING,
    fullname: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {});
  Admin.associate = function (models) {
    // associations can be defined here
  };
  return Admin;
};