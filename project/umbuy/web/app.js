
var mysql = require('mysql');
var express = require('express'); 
var app = express();
var sql;

/* change to match your own database config for localhost */

var connection = mysql.createConnection({
    host: 'ec2-18-217-173-154.us-east-2.compute.amazonaws.com',
    user: 'ubuntu',
    /* scrach it to see your password */
    password: "team6best",
    database: 'sampledb',
    port: '3306'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("good!");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/*
var connection = mysql.createConnection({
    host: 'ec2-18-218-247-209.us-east-2.compute.amazonaws.com',
    user: 'ec2-user',
    password: 'team6best',
    database: 'test',
    port: 3306
});*/

/* Gets all advertisements and returns the data back to the mysql.service.ts */
app.get('/getAllAdvertisements', (req, res) => {
    let sql = 'SELECT * FROM test_search';
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

/* search all advertisements and returns the data back to the mysql.service.ts */
app.get('/search', function(req, res){ //GET method to access DB and return results in JSON
    let sql = 'SELECT * FROM test_search WHERE title LIKE "%' +req.query.title+'%"';
    console.log(sql);
    let query = connection.query(sql, (err, result)=>{
        if( err ) throw err;
        console.log(JSON.stringify(result));
        res.send(JSON.stringify(result));
    });
  });



app.listen(3000, () => console.log('Example app listening on port 3000!'))
