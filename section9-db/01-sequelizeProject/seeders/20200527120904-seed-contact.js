'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contacts', [
      {
        firstname: 'Elmer',
        lastname: 'Urrea',
        phone: '000000',
        email: 'elmer@email.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        firstname: 'Erick',
        lastname: 'Jimenez',
        phone: '000000',
        email: 'erick@email.com',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
