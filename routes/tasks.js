'use strict';

const express   = require('express')
      , router    = express.Router()
      , db = require('../models')
      , Task = db.Task
      ;


router.route('/')
  .get( (req, res) => {
    Task.findAll()
    .then((tasks) => {
       res.render('/tasks',  {
        tasks: tasks
       });
    });
  });

  module.exports = router;