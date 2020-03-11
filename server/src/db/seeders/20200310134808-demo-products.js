'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('products', [{
      product_name: 'iphone 11',
      product_price: 400000.00,
      discount: 10,
      discount_price: 396000.00,
      stars: 4,
      imgurl: '',
      category_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('products', null, {});
  }
};
