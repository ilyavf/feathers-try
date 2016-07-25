'use strict';

module.exports = function(app) {
  return function(req, res, next) {
    // Perform actions
    req.feathers = {token: req.headers['auth-signature']};
    console.log(req.feathers);
    next();
  };
};
