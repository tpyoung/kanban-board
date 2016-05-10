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

//   app.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) {
//       return next(err); // will generate a 500 error
//     }
//     // Generate a JSON response reflecting authentication status
//     if (! user) {
//       return res.send(401,{ success : false, message : 'authentication failed' });
//     }
//     req.login(user, function(err){
//       if(err){
//         return next(err);
//       }
//       return res.send({ success : true, message : 'authentication succeeded' });
//     });
//   })(req, res, next);
// });




  module.exports = router;