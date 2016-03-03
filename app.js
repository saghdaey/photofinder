var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var dotenv= require('dotenv').config();

//could've otherwise done:
//var sendgrid = require('sendgrid')(config.sendgrid.key);
var sendgrid = require('sendgrid')(process.env.SENDGRID_KEY);

var Visitor = require('./db/schema');
var request = require('request');
//var fcKey = config.fullContact.key;
var fcKey=process.env.fullContact_KEY;
var fcController = require('./controllers/fullContactController.js');
var twilio = require('./twilio/app.js');

//default email for testing
//instead of sending to futureteam, email would be sent to bytecubed employees
//who have meeting with arriving guest (sync with calendar)
var email = new sendgrid.Email({
  to: "bcfutureteam@gmail.com",
  from: process.env.SENDGRID_FROM,
  subject: "testing",
  text: "Testing Sendgrid"
});


// initialize mongo connection
mongoose.connect('mongodb://localhost:27017/visitors');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//initialize express instance
var app = express();
var port = process.env.PORT || 3000;
//var port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static(path.join(__dirname + '/client')));
app.listen(port); //line is throwing error

//this line works:
console.log('Now listening for visitors on port ' + port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/client/index.html'));
})

var router = express.Router();
router.route('/api/fullcontact/visitors')
  .post(fcController.getVisitorInfo);

app.use('/', router);

sendgrid.send(email, function(err, json){
   if(err) {
   	return console.error(err); 
   	}
   console.log(json);
});
