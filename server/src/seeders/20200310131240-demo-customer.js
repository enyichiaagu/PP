'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('customers', [{
      fn: 'John',
      ln: 'Doe',
      fullname: 'John Doe',
      email: 'demo@demo.com',
      password: 'chuckBASS',
      imgurl: '',
      tel: '+2347062391596',
      country: 'Nigeria',
      address: "7,obasijuade street",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fn: 'James',
      ln: 'Doe',
      fullname: 'James Doe',
      email: 'demo2@demo.com',
      password: 'chuckBASS',
      imgurl: '',
      tel: '+2347062391596',
      country: 'Nigeria',
      address: "7,obasijuade street",
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
    return queryInterface.bulkDelete('customers', null, {});
  }
};
