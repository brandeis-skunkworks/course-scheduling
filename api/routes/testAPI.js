var express = require("express");
var router = express.Router();
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
      console.log("Result: " + result[0].email);
      router.get("/", function(req, res, next) {
        res.send(result[0].email.toString());
      });
    });
    // con.query("INSERT INTO test_table(teacher_id, first_name, last_name, email, good) VALUES(1, 'Antonella', 'DiLillo', 'adilillo@brandeis.edu', true);"
  });
  

// router.get("/", function(req, res, next) {
//     res.send("API is working properly");
// });

module.exports = router;