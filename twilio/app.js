var express = require('express');
var app = express();
var client = require('twilio')('AC8d35866ac507ff18414eefe0f6c769c2', '12cc1d3eb3931ac5b50e30dc98d3bafe');


app.get('/', function (req, res) {
  res.send('Twilio Notifications');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/sendtext', function(req, res){
  client.sendMessage({
    from: "15715778472",
      to: "19178368548",
    body: "User matches up with database",
  }, function(err, data){
    if(err)
      console.log(err);
    console.log(data);
  });
});
