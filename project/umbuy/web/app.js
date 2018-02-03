var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rawr28',
    database: 'sampledb'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.post('/createAd', (req, res) => {
    console.log(req.body);
    // code 201 for creating object
    res.send(201, req.body);

    var advertisementId = 0;
    var userId = req.body.userId;
    var title = req.body.title;
    var desc = req.body.description;
    var price = req.body.price;
    // var create = req.body.created_on ;
    // var last_update = req.body.last_updated;
    var url = req.body.imageUrl;
    var cate = req.body.category;
    connection.query("INSERT INTO advertisements (advertisementId, title, userId, description, price, imageUrl, category) VALUES (?, ?, ?, ?, ?, ?, ?)", [advertisementId, title, userId, desc, price, url, cate], (err, result)=>{
        console.log(result);
    });
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))
