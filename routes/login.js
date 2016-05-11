'use strict';

const express = require('express'),
      router  = express.Router(),
      passport = require('passport'),
      db      = require('../models'),
      User    = db.User
      ;

router.route('/login')
  .post((req, res) => {
    User.findAll({
      where : {
        username: req.body.username
      }
    })
    .then((existingUser) => {
      if (req.body.username === existingUser) {
        res.json(existingUser);

      }
    });
  });

module.exports = router;