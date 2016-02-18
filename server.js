// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');

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
app.use(cors());

//Logging
app.use(morgan('combined'));

// // Routes
var todosRouter = express.Router();
//GET TODOS
todosRouter.route('/todo')

  .get(function(req, res) {
    Todo.find(function(err, todo) {
        if(err) {
          return res.send(err)
        }
      return res.json(todo);
    });
  })

  //POST TODOS
  .post(function(req, res) {
    console.log('This is the post ' + JSON.stringify(req.body));
      Todo.create({

        text: req.body.text

      }, function(err, todo) {

          if(err) {
            return res.send(err);
          }
        return res.json(todo);
      });
  });


//GET TODOS BY ID
todosRouter.route('/todo/:todo_id')

  .get(function(req, res) {

      Todo.findById(req.params.todo_id, function (err, todo) {

          if(err) {
            return  res.send(err)
          }

          return res.json(todo);
      });
  })
  //DELETE TODOS
  .delete(function(req, res) {
    console.log(JSON.stringify(req.params.todo_id));
      Todo.remove({

          _id: req.params.todo_id

      }, function(err, todo) {

          if(err) {
            return res.send(err)
          }
      });
  });

app.use('/', todosRouter);

app.listen(3000);
console.log('API is running on port 3000');
