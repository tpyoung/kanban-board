'use strict';

const express = require('express'),
      router  = express.Router(),
      db      = require('../models'),
      User    = db.User,
      passport = require('passport')
      ;

router.route('/')
  .post((req, res) => {
    console.log('hello');
    User.findAll({
      where : {
        id: req.body.id
      }
      });
  })
    .post(passport.authenticate('login', {
    successRedirect: '/tasks',
    failureRedirect: '/login',
  }));
  // });

  module.exports = router;



