'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Learn Angular",
        author : "Tyler",
        dueDate:
"2016-05-03T10:00:00.000Z",
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learning Angular",
        author : "Tyler",
        dueDate:
"2016-05-03T10:00:00.000Z",
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learnt Angular",
        author : "Pam",
        dueDate:
"2016-05-03T10:00:00.000Z",
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
