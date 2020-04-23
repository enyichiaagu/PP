'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      order_amount: {
        type: Sequelize.FLOAT
      },
      qty: { type: Sequelize.INTEGER },
      order_ship_name: {
        type: Sequelize.STRING
      },
      order_ship_address: {
        type: Sequelize.STRING
      },
      order_city: {
        type: Sequelize.STRING
      },
      order_phone: {
        type: Sequelize.STRING
      },
      order_email: {
        type: Sequelize.STRING
      },
      order_shipped: {
        type: Sequelize.BOOLEAN
      },
      order_tracking_no: {
        type: Sequelize.STRING
      },
      payment_type: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};