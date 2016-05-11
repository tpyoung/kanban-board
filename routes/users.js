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


//   .post((req, res, next) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     User.findOne({where: { username: username}})
//     .then((user) => {
//       if(user) {
//         req.flash('error', 'Username already exists');
//         return res.redirect('/register');
//       } else {
//         bcrypt.hash(password, saltRounds, (err, hash) => {
//           User.create({
//             username: username,
//             password: hash
//           })
//           .then((user) => {
//             req.login(user, (err) => {
//               if(err) {
//                 return next({status: 500, message: 'Error finding Photo'});
//               }
//               return res.redirect('/gallery');
//             });
//           });
//         });
//       }
//     });
//   });
// module.exports = router