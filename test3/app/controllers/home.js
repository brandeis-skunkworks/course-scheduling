const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  // db.Article.findAll().then((articles) => {
  //   res.render('index', {
  //     title: 'Generator-Express MVC',
  //     articles: articles
  //   });
  // });
  db.Professor.findAll().then((professor) => {
    res.render('index', {
      title: 'Generator-Express MVC',
      professor: professor
    });
  });
});
