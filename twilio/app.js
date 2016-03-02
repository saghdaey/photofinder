var express=require('express');
var app=express();

var config=require('../config');
var client=require('twilio')(config.TWILIO_SID, config.TWILIO_AUTH_TOKEN);
var myPhoneNum='+12029992761'; //receiving phone number

app.get('/',function(req,res){
	res.send('Twilio Notifications');
});

/*app.listen(3000,function(){
	console.log('Example app listening on 3000');
});*/

/*app.get('/sendtext', function(req, res){
  client.sendMessage({
    from: config.TWILIO_NUMBER,
      to: myPhoneNum,
    body: "twilio notification: success",
  }, function(err, data){
    if(err)
      console.log(err);
    console.log(data);
  });
});*/

client.messages.create({
	to: myPhoneNum,
	from: config.TWILIO_NUMBER,
	body: "Hey",
}, function(err, message){
	console.log(message.sid);
});