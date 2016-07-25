'use strict';


const notifications = require('./notifications');


const companies = require('./companies');


module.exports = function() {
  const app = this;


  app.configure(companies);
  app.configure(notifications);
};
