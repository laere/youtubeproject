// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Todo = mongoose.model('Todo', {name: String});

// Mongo DB
//mongoose.connect('mongodb://192.168.1.120/todo');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // Routes
// app.use('/api', require('./routes/api'));

// var test = require('./routes/api');

// Start Server

app.get('/', function (req, res) {
  res.send('This is an API!');
});

app.get('/todo', function (req, res) {
  res.send('GET Todo!');
});

app.post('/todo', function (req, res) {
  res.send('POST Todo');
});

app.put('/todo', function (req, res) {
  res.send('PUT Todo');
});

app.delete('/todo', function (req, res) {
  res.send('DELETE todo');
});

app.listen(3000);
console.log('API is running on port 3000')
