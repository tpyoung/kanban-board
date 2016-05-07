'use strict';

const db = require('../../models'),
      Task = db.Task;

function taskModel(){

  function getTasks(){
    return Task.findAll();
  }
  return {
    getTask : getTasks
  };
}

module.exports = taskModel();