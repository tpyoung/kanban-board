'use strict';

const express   = require('express'),
      router    = express.Router(),
      db = require('../models'),
      User = db.User
      ;

router.route('/')
  .post((req,res)=> {
<<<<<<< HEAD
    console.log('in routes')
=======

    console.log('in routes' )
>>>>>>> 05fb2601121fed1ab70fad411b9b9404fbc4811d
    User.create({
      username: req.body.username,
      password: req.body.password
    })
    .then((newUser) => {
      res.json(newUser);
    });
  });
  module.exports = router;