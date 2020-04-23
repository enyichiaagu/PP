'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('orders', [{
      customer_id: 1,
      order_amount: 800000.00,
      qty: 2,
      order_ship_name: 'John Doe',
      order_ship_address: "7,obasijuade street",
      order_city: 'lagos,Nigeria',
      order_phone: '+2347062391596',
      order_email: 'demo1@demo.com',
      order_shipped: false,
      order_tracking_no: 'zxcohaha-12345-jjah',
      payment_type: 'cash',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      customer_id: 1,
      order_amount: 800000.00,
      qty: 2,
      order_ship_name: 'John Doe',
      order_ship_address: "7,obasijuade street",
      order_city: 'lagos,Nigeria',
      order_phone: '+2347062391596',
      order_email: 'demo1@demo.com',
      order_shipped: false,
      order_tracking_no: 'zxcohaha-12345-jjah',
      payment_type: 'cash',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('orders', null, {});
  }
};
