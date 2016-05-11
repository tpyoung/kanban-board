'use strict';

const express = require('express'),
      router  = express.Router(),
      passport = require('passport'),
      db      = require('../models'),
      User    = db.User
      ;

router.route('/')

  .post((req, res) => {
    User.findAll({
      where : {
        username: req.body.username
      }
    })
    .then((existingUser) => {
      console.log(req.body.username);
    console.log('found user', existingUser);
    if (req.body.username === existingUser) {
      res.json(existingUser);
    }
      res.json({path: '/signUp'});
    });
  });

  module.exports = router;