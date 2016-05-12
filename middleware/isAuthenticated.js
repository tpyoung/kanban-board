'use strict';

function isAuthenticated(req, res, next) {
    if(!req.isAuthenticated()) {
      return res.send('false');
    }
    return next();
  }

module.exports = isAuthenticated;