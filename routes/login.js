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
        id: req.body.id
      }
    });

  });