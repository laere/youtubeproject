var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModel = new Schema({
  id: {
    type: Number
  },
  email: {
    type: String
  },
  name: {
    type: String
  },
  password: {
    type: String
  }
});

module.exports = mongoose.model('User', UserModel);
