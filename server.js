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

app.get('/todo', function (req, res) {

    Todo.find(function (err, todo) {

        if(err) {
            res.send(err)
        }
        res.json(todo);
    });
  });

  var myTodo = new Todo({ text: 'wash the car' });
    myTodo.save(function (err) {
      if (err) {
        console.log(err)
      }
      else {
        console.log('meow');
      }
    });
    app.get('/', function (req, res) {
      res.send('This is an API!');
    });


    // And this will return our todo from DB.


    app.post('/todo', function (req, res) {
      res.send('POST Todo');
    });

    app.put('/todo', function (req, res) {
      res.send('PUT Todo');
    });

    app.delete('/todo', function (req, res) {
      res.send('DELETE todo');
    });


// app.post('/todo', function(req, res) {
//
//     Todo.create({
//
//       text: 'req.body.text'
//
//     }, function(err, todo) {
//         if(err) {
//           res.send(err);
//         }
//         Todo.find(function(err, todo) {
//           if(err) {
//             res.send(err)
//           }
//           res.json(todo);
//         });
//     });
// });
//
// app.delete('/api/todo/:todo_id', function(req, res) {
//
//     Todo.remove({
//         _id: req.params.todo_id
//     }, function(err, todo) {
//         if(err) {
//           res.send(err)
//         }
//
//       Todo.find(function(err, todo) {
//             if(err) {
//               res.send(err)
//             }
//             res.json(todo);
//           });
//       });
// });

app.listen(3000);
console.log('API is running on port 3000')




// app.use('/api', require('./routes/api'));

// var test = require('./routes/api');

// Start Server

// That will save a todo, each time we start the app

//
//
