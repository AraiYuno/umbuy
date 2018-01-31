var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

/* change to match your own database config for localhost */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'coutures',
    password: '**********',
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

/* Gets all advertisements and returns the data back to the mysql.service.ts */
app.get('/getAllAdvertisements', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
