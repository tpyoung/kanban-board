'use strict';

const express   = require('express')
      , router    = express.Router()
      , db = require('../models')
      , Task = db.Task
      ;


router.route('/')
  .get( (req, res) => {
    console.log('In Routes, tasks.js', res);
    Task.findAll()
    .then((tasks) => {
       res.send(tasks);
       });
  // .post)
    });




  module.exports = router;