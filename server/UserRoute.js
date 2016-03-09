
var userRouter = express.router();


// GET UserS
userRouter.route('/post')

  .get(function(req, res) {

    User.find(function(err, user) {

        if(err) {

          return res.send(err);
        }

      return res.json(user);

    });
  })

  //POST UserS
  .post(function(req, res) {

    console.log('This is the post ' + JSON.stringify(req.body));

      User.create({

        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password

      }, function(err, user) {

          if(err) {

            return res.send(err);
          }

        return res.json(user);

      });
  });

//GET UserS BY USER ID
userRouter.route('/post/:user_id')

  .get(function(req, res) {

      User.findById(req.params.post_id, function (err, user) {

          if(err) {

            return  res.send(err);
          }

          return res.json(User);
      });
  })

  //DELETE UserS
  .delete(function(req, res) {

    console.log(JSON.stringify(req.params.post_id));

      User.remove({

          _id: req.params.post_id

      }, function(err, user) {

          if(err) {

            return res.send(err);

          }

      });
  });

app.use('/', userRouter);

module.exports = UserRoute;
