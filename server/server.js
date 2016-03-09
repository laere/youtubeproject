// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

// Import Routes
var UserRoute = require('./routes/UserRoute');
var CommentsRoute = require('./routes/CommentsRoute');
var BlogPostsRoute = require('./routes/BlogPostsRoute');

// Mongo DB
mongoose.connect('mongodb://localhost/blog');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Logging
app.use(morgan('combined'));

// DEFINE MODELS
var BlogPost = mongoose.model('BlogPost', {
  id: Number,
  user_id: Number,
  title: String,
  image: String,
  post: String,
  date_created: Number
});

var Comment = mongoose.model('Comment', {
  id: Number,
  user_id: Number,
  comment: String,
  date_created: Number
});

var User = mongoose.model('User', {
  id: Number,
  email: String,
  name: String,
  password: String
});

var Category = mongoose.model('Category', {
  id: Number,
  name: String
});

var Tag = mongoose.model('Tag', {
  id: Number,
  name: String
});

// Routes
app.use('/', BlogPostsRoute);
app.use('/', CommentsRoute);
app.use('/', UserRoute);

app.listen(3000);
console.log('API is running on port 3000!');
