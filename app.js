
var config = require('./config');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var sendgrid = require('sendgrid')(config.sendgrid.key);
var Visitor = require('./db/schema');
var request = require('request');
var fcKey = config.fullContact.key;
//default email for testing
var email = new sendgrid.Email({
  to: "jeff.jones1@gmail.com",
  from: "jeff.jones1@gmail.com",
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
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  res.send("HELLO")

})


app.listen(port);
console.log('Now listening for visitors on port ' + port);

request('https://api.fullcontact.com/v2/person.json?email=bart@fullcontact.com&apiKey=' + fcKey, function(err, res, body){
  if(!err & res.statusCode == 200){
    console.log(body);
  }
})
// sendgrid.send(email, function(err, json){
//   if(err) {return console.error(err); }
//   console.log(json);
// });
