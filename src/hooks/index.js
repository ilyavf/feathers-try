'use strict';

const checkAuth = require('./check-auth.js');

// Add any common hooks you want to share across services in here.
//
// Below is an example of how a hook is written and exported. Please
// see http://docs.feathersjs.com/hooks/readme.html for more details
// on hooks.

module.exports = {
  checkAuth
};
