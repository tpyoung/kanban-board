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
  .put((req, res, next) => {

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

  .delete((req, res, next) => {
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