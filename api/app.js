var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();

var mysql = require('mysql');



var con = mysql.createConnection({
    host: "localhost",
    user: "festrella",
    // password: "password"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database!");
    con.query("USE test_db", function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
    con.query("SELECT * FROM test_table", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
    // con.query("INSERT INTO test_table(teacher_id, first_name, last_name, email, good) VALUES(1, 'Antonella', 'DiLillo', 'adilillo@brandeis.edu', true);"
  });

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(cors());
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use("/testAPI", testAPIRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
