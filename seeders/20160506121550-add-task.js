'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Make Coffee",
        description: "No room for cream or sugar please",
        author : "Scully",
        dueDate: '5/10/16',
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Schedule Meeting",
        description: "Discuss matters of matter and such",
        author : "Mulder",
        dueDate: '5/9/16',
        status : "done",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Write a Book",
        description: "Go somewhere and do some things",
        author : "Jack Torrance",
        dueDate: '5/10/16',
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },



  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
