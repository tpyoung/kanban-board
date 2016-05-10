'use strict';

const express   = require('express'),
      router    = express.Router(),
      db = require('../models'),
      Tasks = db.Tasks
      ;

router.route('/')
  .get( (req, res) => {
    Tasks.findAll()
    .then((tasks) => {
       res.send(tasks);
       });
  })
  .post((req, res)  => {
    Tasks.create({
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
  .put((req, res, next) => {

    var changingObj = {};

    changingObj[req.body.field] = req.body.update;

    Tasks.update(changingObj,
    {
      where: {
        id: req.body.id
      }
    })
    .then((tasks)=> {
      return Tasks.findAll();
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

    Tasks.destroy({
      where: {
        id: req.body.id
      }
    })
    .then((tasks) => {
      return Tasks.findAll();
    })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      return  next ({err: err});
    });

  });



  module.exports = router;