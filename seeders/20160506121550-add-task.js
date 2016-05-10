'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Tasks',
      [
      {
        title : "Make Coffee",
        description: "French Press or Drip please",
        author : "Jauquin",
        dueDate: '5/10/16',
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Schedule Meeting",
        description: "Discuss matters of matter and such",
        author : "Jauquin",
        dueDate: '5/9/16',
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learn Angular",
        description: "Think you have it kind of down, figure out you don't, flip table, then put table back",
        author : "River",
        dueDate: '5/10/16',
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
