'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {


    var tasks = [
      {
        title : "Learn Angular",
        author : "Tyler",
        dueDate: 'May 20th',
        status : "ok",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learning Angular",
        author : "Tyler",
        dueDate: 'May 20th',
        status : "do",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learnt Angular",
        author : "Pam",
        dueDate: 'May 20th',
        status : "done",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ];

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
