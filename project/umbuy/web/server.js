var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var app = express();
var sql;

var db_config = {
    host: 'ec2-18-217-86-148.us-east-2.compute.amazonaws.com',
    user: 'kyle',
    password: 'team6best',
    database: 'sampledb',
    port: 3306
};

function handleDisconnect() {
  connection = mysql.createConnection(db_config); // Recreate the connection, since
                                                  // the old one cannot be reused.

  connection.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
                                          // If you're also serving http, display a 503 error.
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                  // server variable configures this)
    }
  });
}

handleDisconnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/ads', (req, res) => {
    let sql = 'SELECT * FROM advertisements';
    let query = connection.query(sql, (err, result)=> {
        if( err ){
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/ads/:id', (req, res) => {
    let sql = 'SELECT * FROM advertisements WHERE advertisementId = ' + req.params.id;
    console.log(sql);
    let query = connection.query(sql, (err, result)=> {
        if( err ){
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
    });
});

app.get('/search/:title', function(req, res){
    let sql = 'SELECT * FROM advertisements WHERE title LIKE "%' +req.params.title+'%"';
    console.log(sql);
    let query = connection.query(sql, (err, result)=>{
        if( err ){
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
    });
  });

app.get('/users/:id', (req, res) => {
    let sql = 'SELECT * FROM users WHERE userId = ' + req.params.id;
    let query = connection.query(sql,(err, result)=> {
        if( err ){
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
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
        if( err ){
            console.log(err);
        } else{
            console.log(result);
            res.send(result);
        }
    });
});

app.listen(9000, () => console.log('Example app listening on port 9000!'));