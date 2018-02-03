
var mysql = require('mysql');
var express = require('express'); 
var app = express();
var sql;

var connection = mysql.createConnection({
    host: 'ec2-18-217-173-154.us-east-2.compute.amazonaws.com',
    user: 'ubuntu',
    /* scrach it to see your password */
    password: "team6best",
    database: 'sampledb',
    port: '3306'
});

// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     /* scrach it to see your password */
//     password: "yy283689291yy",
//     database: 'sampledb'
// });

connection.connect(function(err){
    if (err) throw err;
    console.log("good!");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname + '/dist/index.html');
});

app.get('/ads', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    console.log(sql);
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

/* search all advertisements and returns the data back to the mysql.service.ts */
app.get('/ads/:title', function(req, res){ 
    let sql = 'SELECT * FROM test_search WHERE title LIKE "%' +req.params.title+'%"';
    console.log(sql);
    let query = connection.query(sql, (err, result)=>{
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
  });


app.get('/ads/:id', (req, res) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + req.params.id;
    console.log(sql);
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/users/:id', (req, res) => {
    let sql = 'SELECT * FROM users WHERE userId = ' + req.params.id;
    let query = connection.query(sql,(err, result)=> {
        if( err ) throw err;
	    console.log(result);
        res.send(result);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
