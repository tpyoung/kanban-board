'use strict';

const express   = require('express'),
      router    = express.Router()
      // ,
      // taskModel = require('./taskmodels')
      ;


router.route('/')
  .get(function (req, res) {
    res.json({ hi: 'hi' });
  });

  module.exports = router;