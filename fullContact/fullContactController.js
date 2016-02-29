//query api
var config = require('../config.js');
exports.getVisitorInfo = function(req, res){
  request('https://api.fullcontact.com/v2/person.json?email=bart@fullcontact.com&apiKey=' + fcKey, function(err, res, body){
    if(!err & res.statusCode == 200){
      res.json(body)
    }
  })
}
