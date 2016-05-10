'use strict';

const express = require('express'),
      router  = express.Router(),
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
    console.log('found user', existingUser);
      res.json(existingUser);
    });
  });
  module.exports = router;