
var blogpostsRouter = express.router();


// GET BLOGPOSTS
blogpostsRouter.route('/post')

  .get(function(req, res) {

    BlogPost.find(function(err, blogpost) {

        if(err) {

          return res.send(err);
        }

      return res.json(blogpost);

    });
  })

  //POST BLOGPOSTS
  .post(function(req, res) {

    console.log('This is the post ' + JSON.stringify(req.body));

      BlogPost.create({

        id: req.body.id,
        user_id: req.body.user_id,
        title: req.body.title,
        image: req.body.image,
        post: req.body.post,
        date_created: req.body.date_created

      }, function(err, blogpost) {

          if(err) {

            return res.send(err);
          }

        return res.json(blogpost);

      });
  });

//GET BLOGPOSTS BY USER ID
blogpostsRouter.route('/post/:user_id')

  .get(function(req, res) {

      BlogPost.findById(req.params.post_id, function (err, blogpost) {

          if(err) {

            return  res.send(err);
          }

          return res.json(blogpost);
      });
  })

  //DELETE BLOGPOSTS
  .delete(function(req, res) {

    console.log(JSON.stringify(req.params.post_id));

      BlogPost.remove({

          _id: req.params.post_id

      }, function(err, blogpost) {

          if(err) {

            return res.send(err);

          }

      });
  });

app.use('/', blogpostsRouter);

module.exports = BlogPostsRoute;
