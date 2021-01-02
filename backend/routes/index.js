var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const cors = require('cors');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


var con = mysql.createConnection({
  host: "localhost",
  user: "festrella",
  database: "test_db"
  // password: "password"

});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to database");
  con.query("SELECT * FROM test_table", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      // router.get("/", function (req, res) {
      //     console.log("got root")
      //     // res.send(result);
      // });
  });  
});  
// con.query("INSERT INTO test_table(teacher_id, first_name, last_name, email, good) VALUES(1, 'Antonella', 'DiLillo', 'adilillo@brandeis.edu', true);"

router.post('/save', function (req, res) {
  console.log('About to save to database');
  var art = req.body;
  console.log(req.body);
  
  con.query("INSERT INTO test_table(teacher_id, first_name, last_name, email, good) VALUES(9, '" + req.body.name + "', 'DiLillo', 'adilillo@brandeis.edu', true);",
      function (err, res) {
      })
})
//"INSERT INTO test_table SET ?", art,    

module.exports = router;
