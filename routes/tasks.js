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
       })
  })
  .post((req, res)  => {
    Task.create({
      title: req.body.title,
      author: req.body.author,
      dueDate: req.body.dueDate,
      status: req.body.status
    })
    .then((newTask) => {
      res.json(newTask);
    });
  })
  .put((req, res) => {
    console.log('In Routes, tasks.js', req.body);
    Task.findAll({
      where: {
        id: req.body.id
      }
    })
    .then((tasks) => {
      res.send(tasks);
    });
  });



  module.exports = router;