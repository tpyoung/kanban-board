'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Learn Angular",
        author : "Tyler",
        dueDate: 'May 20th',
        status : "todo",
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
    ]);
  },



  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
