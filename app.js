var config = require('./config')
var sendgrid = require('sendgrid')(config.sendgrid.key);
var email = new sendgrid.Email({
  to: "jeff.jones1@gmail.com",
  from: "jeff.jones1@gmail.com",
  subject: "testing",
  text: "Testing Sendgrid"
});



// sendgrid.send(email, function(err, json){
//   if(err) {return console.error(err); }
//   console.log(json);
// });
