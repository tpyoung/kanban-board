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
      if (req.body.username === existingUser[0].dataValues.username) {
        var existingUser = existingUser[0].dataValues.username;
        res.json(existingUser);

      }
    });
  });

module.exports = router;