'use strict';

const express   = require('express'),
      router    = express.Router(),
      db = require('../models'),
      User = db.User
      ;

router.route('/')

  .post((req,res)=> {

    console.log('in routes')
    User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then((newUser) => {
      res.json(newUser);
    });
  });

  module.exports = router;