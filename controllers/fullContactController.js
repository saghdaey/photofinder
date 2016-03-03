//query api
var config = require('../config.js');
var dotenv= require('dotenv').config();
var request = require('request');
//var fcKey = config.fullContact.key;
var fcKey = process.env.fullContact_KEY;

exports.getVisitorInfo = function(req, res, next){
  var email = "jeff.jones1@gmail.com";
  request('https://api.fullcontact.com/v2/person.json?email=' + req.body.email + '&apiKey=' + fcKey, function(err, response, body){
    if(!err & res.statusCode == 200){
      res.json(JSON.parse(body));
    }
    else {
      res.send(404);
    }
  });
}
