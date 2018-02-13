var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express'); 
var app = express();
var sql;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* This file is used for localhost testing */
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'coutures',
    password: "cherry14",
    database: 'project4350',
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

app.get('/ads', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    console.log(sql);
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/ads/:id(\\d+)', (req, res) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + req.params.id;
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

/* search all advertisements and returns the data back to the advertisement.service.ts */
app.get('/ads/:title', function(req, res){ 
    let sql = 'SELECT * FROM advertisements WHERE title LIKE "%' +req.params.title+'%"';
    let query = connection.query(sql, (err, result)=>{
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

app.post('/createAd', (req, res) => {
    // code 201 for creating object
    res.status(201).send(req.body);

    var advertisementId = 0;
    var userId = req.body.userId;
    var title = req.body.title;
    var desc = req.body.description;
    var price = req.body.price;
    var url = req.body.imageUrl;
    var cate = req.body.category;
    connection.query("INSERT INTO advertisements (advertisementId, title, userId, description, price, imageUrl, category) VALUES (?, ?, ?, ?, ?, ?, ?)", [advertisementId, title, userId, desc, price, url, cate], (err, result)=>{
        console.log(result);
    });
});

app.listen(3000, () => console.log('Listening on port 3000!'))
