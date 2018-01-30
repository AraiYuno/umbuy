var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Tmxk15908*',
    database: 'sampledb',
    port: 3306
});
//WTF

/*
var connection = mysql.createConnection({
    host: 'ec2-18-218-247-209.us-east-2.compute.amazonaws.com',
    user: 'ec2-user',
    password: 'team6best',
    database: 'team6DB',
    port: 3306
});*/

/*
connection.connect(function(error){
    if( !!error ){
        console.log('error');
    } else {
        console.log('Connected Successfully!');
    }
    console.log("It doesn't get here");
});*/

/*

connection.query('SELECT * FROM users', function(error, rows, fields){
    if(error ) throw error;
    else{
        console.log("Query Successful");
        //parse ur query here
    }
});*/


/*app.get('/', function(req, res){
    console.log("??");
    connection.getConnection(function(error, tempCont){
        if(!! error ){
            tempCont.release();
            console.log("ERROR2");
        } else {
            console.log("Connexted Query!");
            tempCont.query("SELECT * FROM users", function(error, rows, fields){
                tempCont.release();
                if(!! error ){
                    console.log("Errr in the queryyyy");
                } else {
                    res.json(rows);
                }
            });
        }
    });
})*/

app.get('/addusers1', (req, res) => {
    let user = {firstname:'Bhaulik', lastname:'Patel'};
    let sql = 'INSERT INTO users SET ?';
    let query = connection.query(sql, user, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send('Users are adasdsadded!');
    });
});

app.get('/getusers', (req, res) => {
   let sql = 'SELECT * FROM users';
   let query = connection.query(sql, ( err, rows, fields ) => {
       if( err ) throw err;
       res.send(rows);
   });
});

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.listen(3000);

/*app.get('/createdb', (req, res)=>{
    let sql = 'CREATE DATABASE team6db';
    connection.query(sql,(err,result)=>{
        if( err ) throw err;
        console.log('result');
        res.send('DATABASE CREATED!');
    })
})

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id)';
    connection.query(sql, (err,result) => {
        if( err ) throw err;
        console.log(result);
        res.send("Posts table created");
    })
})

app.get('/adduser1', (req, res) => {
    let post = {firstname: 'Munsif', lastname: 'Aman'};
    let sql = 'INSERT INTO users SET ?';
    let query = connection.query(sql, post, (err, result) =>{
        if(err) throw err;
        console.log(reuslt);
        res.send("Post 1 Added");
    })
}) */
