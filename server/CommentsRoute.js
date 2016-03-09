
var commentsRouter = express.router();


// GET CommentS
commentsRouter.route('/post')

  .get(function(req, res) {

    Comment.find(function(err, comment) {

        if(err) {

          return res.send(err);
        }

      return res.json(comment);

    });
  })

  //POST CommentS
  .post(function(req, res) {

    console.log('This is the post ' + JSON.stringify(req.body));

      Comment.create({

        id: req.body.id,
        user_id: req.body.user_id,
        comment: req.body.comment,
        date_created: req.body.date_created

      }, function(err, comment) {

          if(err) {

            return res.send(err);
          }

        return res.json(comment);

      });
  });

//GET CommentS BY USER ID
commentsRouter.route('/post/:user_id')

  .get(function(req, res) {

      Comment.findById(req.params.post_id, function (err, comment) {

          if(err) {

            return  res.send(err);
          }

          return res.json(comment);
      });
  })

  //DELETE CommentS
  .delete(function(req, res) {

    console.log(JSON.stringify(req.params.post_id));

      Comment.remove({

          _id: req.params.post_id

      }, function(err, comment) {

          if(err) {

            return res.send(err);

          }

      });
  });

app.use('/', commentsRouter);

module.exports = CommentsRoute;
