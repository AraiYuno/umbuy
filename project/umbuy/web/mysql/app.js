var bodyParser = require('body-parser');
var mysql = require('mysql');
var express = require('express'); 
var app = express();
var sql;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


var connection = mysql.createConnection({
    host: 'ec2-18-217-173-154.us-east-2.compute.amazonaws.com',
    user: 'ubuntu',
    // scrach it to see your password 
    password: "team6best",
    database: 'sampledb',
    port: '3306'
});


/*var connection = mysql.createConnection({
     host: '127.0.0.1',
     user: 'coutures',
     // scrach it to see your password 
     password: "cherry14",
     database: '4350'
});*/

connection.connect(function(err){
    if (err) throw err;
    console.log("good!");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// app.use(express.static(__dirname + '/dist'));

// app.all('*', (req, res) => {
//     res.status(200).sendFile(__dirname + 'dist/index.html');
// });


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
    console.log(req.body);
    // code 201 for creating object
    res.status(201).send(req.body);

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
