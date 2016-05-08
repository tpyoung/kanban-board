'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Learn Angular",
        author : "Tyler",
        dueDate:"Sun May 01 2016 00:00:00 GMT-1000 (HST)",
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learning Angular",
        author : "Tyler",
        dueDate:"Sun May 01 2016 00:00:00 GMT-1000 (HST)",
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learnt Angular",
        author : "Pam",
        dueDate:"Sun May 01 2016 00:00:00 GMT-1000 (HST)",
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
