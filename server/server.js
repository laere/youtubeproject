// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

// Import Routes
var UserRoute = require('./UserRoute');
var CommentsRoute = require('./CommentsRoute');
var BlogPostsRoute = require('./BlogPostsRoute');

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

// Mongo DB
mongoose.connect('mongodb://localhost/blog');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Logging
app.use(morgan('combined'));

// Routes
app.use('/', BlogPostsRoute);
app.use('/', CommentsRoute);
app.use('/', UserRoute);

app.listen(3000);
console.log('API is running on port 3000!');
