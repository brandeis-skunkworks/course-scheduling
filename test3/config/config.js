const { userInfo } = require('os');
const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'test3'
    },
    port: process.env.PORT || 2000,
    db: 'test_db',
    user: 'festrella',
    password: ''
  },

  test: {
    root: rootPath,
    app: {
      name: 'test3'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/test3-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test3'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/test3-production'
  }
};

module.exports = config[env];
