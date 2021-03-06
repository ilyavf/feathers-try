'use strict';

// src/services/hooks/checkAuth.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    return new Promise((resolve, reject) => {
      let token = hook.params.token;
      resolve(hook);
    });
  };
};
