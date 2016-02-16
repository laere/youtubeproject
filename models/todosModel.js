var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todosModel = new Schema({
  name: {
    type: String
  },
  id: {
    type: Number
  }
});

module.exports = mongoose.model('Todo', todosModel);
