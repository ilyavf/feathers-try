'use strict';

const hooks = require('./hooks');

class Service {
  constructor(options) {
    this.options = options || {};
  }

  find(params) {
    return new Promise((resolve, reject) => {
      resolve([
        {
          "id": "1",
          "title": "Testing Notifications",
          "text": "You can have a pretty long thing here of more and more text.",
          "module": "system",
          "actionable": false,
          "seen": false,
          "date": 1461962679
        },
        {
          "id": "4",
          "title": "Testing Notifications2",
          "text": "You can have a pretty long thing here of more and more text.2",
          "module": "system",
          "actionable": true,
          "seen": false,
          "date": 1461962679
        }
      ])
    });
  }

  get(id, params) {
    return Promise.resolve({
      id, text: `A new message with ID: ${id}!`
    });
  }

  create(data, params) {
    if(Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    return Promise.resolve(data);
  }

  update(id, data, params) {
    return Promise.resolve(data);
  }

  patch(id, data, params) {
    return Promise.resolve(data);
  }

  remove(id, params) {
    return Promise.resolve({ id });
  }
}

module.exports = function(){
  const app = this;

  // Initialize our service with any options it requires
  app.use('/v1/notifications', new Service());

  // Get our initialize service to that we can bind hooks
  const notificationsService = app.service('/v1/notifications');

  // Set up our before hooks
  notificationsService.before(hooks.before);

  // Set up our after hooks
  notificationsService.after(hooks.after);
};

module.exports.Service = Service;
