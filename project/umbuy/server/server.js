const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();
const api = require('./api');

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

app.use(express.static(__dirname + '/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(erq, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requrested-With, Content-Type, Accept");
  next();
});

app.use('/api', api);

app.get('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
  console.log(req);
});

app.listen(9000, () => console.log('Listening on port 9000!'));

