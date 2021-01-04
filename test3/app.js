

const express = require('express');
const config = require('./config/config');
const db = require('./app/models');

const app = express();

module.exports = require('./config/express')(app, config);

db.sequelize
  .sync({ force: true })
  .then(() => {
    if (!module.parent) {
      app.listen(config.port, () => {
        console.log('Express server listening on port ' + config.port);
      });
    }
  }).catch((e) => {
    throw new Error(e);
  });

