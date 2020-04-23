'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.FLOAT
      },
      discount: {
        type: Sequelize.INTEGER
      },
      discount_price: {
        type: Sequelize.FLOAT
      },
      stars: {
        type: Sequelize.INTEGER
      },
      imgurl: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // Product belongsTo Category 1:1
          model: 'categories',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};