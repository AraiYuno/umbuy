var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

/* This file is used for server testing */
var connection = mysql.createConnection({
    host: 'ec2-18-217-86-148.us-east-2.compute.amazonaws.com',
    user: 'kyle',
    password: 'team6best',
    database: 'sampledb',
    port: 3306
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

connection.connect(function(err){
  if( err ) throw err;
  console.log("Connected!");
});

app.use(function(erq, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requrested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
  console.log(req);
});

/*
app.route('/').get(function(req, res ){
  return res.sendFile(path.join(config.root, '/dist/index.html'));
});*/

app.get('/ads', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get('/ads/:id', (req, res) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + req.params.id;
    let query = connection.query(sql, (err, result)=> {
        if( err ) throw err;
        console.log(result);
        res.send(result);
    });
});

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
    console.log(req.body);
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

app.listen(9000, () => console.log('Listening on port 9000!'))
