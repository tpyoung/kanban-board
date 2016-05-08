'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Learn Angular",
        author : "Tyler",
        dueDate: new Date(),
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learning Angular",
        author : "Tyler",
        dueDate: new Date(),
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learnt Angular",
        author : "Pam",
        dueDate: new Date(),
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
