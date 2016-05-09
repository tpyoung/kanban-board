'use strict';


module.exports = function(sequelize, Datatypes) {

  var Task = sequelize.define("Task", {
    title: Datatypes.STRING,
    author: Datatypes.STRING,
    dueDate: Datatypes.DATE,
    status: Datatypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // Task.belongsTo(models.User, {
        //   foreignKey: 'user_id'
        // });
      }
    }

  });
  return Task;
};