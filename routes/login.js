'use strict';

const express = require('express'),
      router  = express.Router(),
      db      = require('../models'),
      User    = db.User,
      passport = require('passport')
      ;

  router.route('/')
  .get((req, res) => {
    return res.json({path: '/login'});
  })
// router.route('/')
//   .get((req, res) => {
//     User.findAll({
//       where : {
//         id: req.body.id
//       }
//     })
    .post(passport.authenticate('login', {
    successRedirect: '/tasks',
    failureRedirect: '/login',
    failureFlash: true,
  }));
  // });

  module.exports = router;



