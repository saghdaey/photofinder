var mongoose = require('mongoose');
var visitorSchema = new mongoose.Schema ({
	firstname: {type: String},
	lastname:{type: String},
    email: {type: String, required: true},
    photos: [
      {url: String}
    ]
});

var visitorModel = mongoose.model("Visitor", visitorSchema);
module.exports = visitorModel
