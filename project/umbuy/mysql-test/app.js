var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

/*
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tmxk15908*',
    database: 'sampledb',
    port: 3306
});*/

var connection = mysql.createConnection({
    host: 'ec2-18-218-247-209.us-east-2.compute.amazonaws.com',
    user: 'ec2-user',
    password: 'team6best',
    database: 'test',
    port: 3306
});

app.get('/addusers1', (req, res) => {
    let user = {id: 2, value:'Patel'};
    let sql = 'INSERT INTO ss SET ?';
    let query = connection.query(sql, user, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send('Users are adasdsadded!');
    });
});
