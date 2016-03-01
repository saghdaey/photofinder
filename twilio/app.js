var express=require('express');
var app=express();
var client=require('twilio')('',''); //fill this in
//TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEn

var myTwilioNum=;
var myPhoneNum='+12029992761'

app.get('/',function(req,res){
	res.send('Twilio Notifications');
});

app.listen(3000,function(){
	console.log('Example app listening on 3000');
});

app.get('/sendtext', function(req, res){
  client.sendMessage({
    from: myTwilioNum;
      to: myPhoneNum;
    body: "your guest has arrived",
  }, function(err, data){
    if(err)
      console.log(err);
    console.log(data);
  });
});