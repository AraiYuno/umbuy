
var mysql = require('mysql');
var express = require('express'); 
var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yy283689291yy",
  database: "sampledb",
});


app.get('/a', function(req, res, next){
    // var cope = req.body.params;
    var query = con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        return res.send(result);
      });

 });

 app.get('/getusers', (req, res) => {
    let sql = 'SELECT * FROM users';
    let query = con.query(sql, ( err, rows, fields ) => {
        if( err ) throw err;
        res.send(rows);
    });
 });

app.listen(3000);



