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
       res.send(tasks);
       });
    });

  module.exports = router;