'use strict';

const express   = require('express'),
      router    = express.Router(),
      db = require('../models'),
      bcrypt = require('bcryptjs'),
      bodyParser = require('body-parser'),
      User = db.User,
      saltRounds = 10;

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.route('/')
  .post((req,res) => {
    var password = req.body.password;
    console.log(password);
    var username = req.body.username;
    console.log(username);
    bcrypt.hash(password, saltRounds, (err, hash) => {
      User.create({
        username: username,
        password: hash
      })
      .then((newUser) => {
        res.json(newUser);
      });
    });
  });

  module.exports = router;
