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
        title : "Make a list",
        description: "write down stuff",
        author : "Mulder",
        dueDate: '5/9/16',
        status : "done",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Write a book about Space",
        description: "The universe, what a concept",
        author : "Jack",
        dueDate: '5/10/16',
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
            {
        title : "Day Dream",
        description: "Pretend you're an airplane or something, idk",
        author : "Scully",
        dueDate: '5/10/16',
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "play SSB n64",
        description: "Unlock Ness",
        author : "Mulder",
        dueDate: '5/9/16',
        status : "done",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Take some photos",
        description: "cool pictures of cool stuff",
        author : "Jill",
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
