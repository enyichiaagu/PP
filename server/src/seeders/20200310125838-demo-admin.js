'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('admins', [{
      fn: 'John',
      ln: 'Doe',
      fullname: 'John Doe',
      password: 'chuckBASS',
      email: 'demo@demo.com',
      imgurl: '',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      fn: 'Adams',
      ln: 'Smith',
      fullname: 'Adams Smith',
      password: 'chuckBASS',
      email: 'admassmith@demo.com',
      imgurl: '',
      admin: false,
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
    return queryInterface.bulkDelete('admins', null, {});
  }
};
