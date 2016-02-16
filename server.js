// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Define our Todo Model
var Todo = mongoose.model('Todo', {
  text: String
});

// Mongo DB
mongoose.connect('mongodb://localhost/todo');

// Express
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// // Routes

//GET TODOS
app.get('/todo', function (req, res) {

    Todo.find(function (err, todo) {

        if(err) {
          return  res.send(err)
        }

        return res.json(todo);
    });
});

//POST TODOS
app.post('/todo', function(req, res) {

    Todo.create({

      text: req.body.text

    }, function(err, todo) {

        if(err) {
          return res.send(err);
        }
    });
});

//DELETE TODOS
app.delete('/api/todo/:todo_id', function(req, res) {

    Todo.remove({

        _id: req.params.todo_id

    }, function(err, todo) {

        if(err) {
          return res.send(err)
        }
    });
});

app.put('/todo', function (req, res) {
  res.send('PUT Todo');
});

app.delete('/todo', function (req, res) {
  res.send('DELETE todo');
});



app.listen(3000);
console.log('API is running on port 3000')

// app.use('/api', require('./routes/api'));

// var test = require('./routes/api');
