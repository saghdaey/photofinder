var express=require('express');
var app=express();

var config=require('../config');

var dotenv= require('dotenv').config();
var client=require('twilio')(process.env.twilio_SID, process.env.twilio_AUTH_TOKEN);

//var client=require('twilio')(config.twilio.SID, config.twilio.AUTH_TOKEN);
var employeeNumber='+12029992761'; //receiving phone number
//

app.get('/',function(req,res){
	res.send('Twilio Notifications');
});

/*app.listen(3000,function(){
	console.log('Example app listening on 3000');
});*/

/*app.get('/sendtext', function(req, res){};*/

client.messages.create({
	to: employeeNumber,
	//from: config.twilio.NUMBER,
	from: process.env.twilio_NUMBER,
	body: "Hey",
}, function(err, message){
  if(err)
    console.log(err);
	console.log("text notification: success");
});