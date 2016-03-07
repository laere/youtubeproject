var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogPostModel = new Schema({
  id: {
    type: Number
  },
  user_id: {
    type: Number
  },
  title: {
    type: String
  },
  image: {
    type: String
  },
  post: {
    type: String
  },
  date_created: {
    type: Number
  }
});

module.exports = mongoose.model('BlogPost', BlogPostModel);
