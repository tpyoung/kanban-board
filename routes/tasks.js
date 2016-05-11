'use strict';

const express   = require('express'),
      router    = express.Router(),
      db = require('../models'),
      Task = db.Task,
      isAuthenticated = require('../middleware/isAuthenticated.js')
      ;


router.route('/')
  .get( (req, res) => {

    Task.findAll()
    .then((tasks) => {
       res.send(tasks);
       });
  })

  .post(isAuthenticated, (req, res)  => {
    Task.create({
      title: req.body.title,
      description: req.body.description,
      author: req.body.author,
      dueDate: req.body.dueDate,
      status: req.body.status
    })
    .then((newTask) => {
      res.json(newTask);
    });
  })
  .put(isAuthenticated, (req, res, next) => {

    var changingObj = {};

    changingObj[req.body.field] = req.body.update;

    Task.update(changingObj,
    {
      where: {
        id: req.body.id
      }
    })
    .then((tasks)=> {
      return Task.findAll();
    })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      return next({ err: err });
    });
  })

  .delete(isAuthenticated, (req, res, next) => {
    console.log('In Routes, tasks.js', req.body);

    Task.destroy({
      where: {
        id: req.body.id
      }
    })
    .then((tasks) => {
      return Task.findAll();
    })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      return  next ({err: err});
    });

  });



  module.exports = router;