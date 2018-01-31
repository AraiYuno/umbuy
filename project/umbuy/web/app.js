var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'coutures',
    password: '***********',
    database: '4350'
});

/*
var connection = mysql.createConnection({
    host: 'ec2-18-218-247-209.us-east-2.compute.amazonaws.com',
    user: 'ec2-user',
    password: 'team6best',
    database: 'test',
    port: 3306
});*/

app.get('/getAllAdvertisements', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getAdvertisementById/:id', (req, res) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + req.params.id;
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/getUserById/:id', (req, res) => {
    let sql = 'SELECT * FROM users WHERE userId = ' + req.params.id;
    let query = connection.query(sql,(err, result)=> {
        if( err ) throw err;
	console.log(result);
        res.send(result);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
