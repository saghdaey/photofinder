var config = require('./config');
var mongoose = require('mongoose');
var path = require('path');
var sendgrid = require('sendgrid')(config.sendgrid.key);
var Visitor = require('./db/schema');
var email = new sendgrid.Email({
  to: "jeff.jones1@gmail.com",
  from: "jeff.jones1@gmail.com",
  subject: "testing",
  text: "Testing Sendgrid"
});

mongoose.connect('mongodb://localhost:27017/visitors');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log(Visitor);
});




// sendgrid.send(email, function(err, json){
//   if(err) {return console.error(err); }
//   console.log(json);
// });
