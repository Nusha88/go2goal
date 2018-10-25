// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */


const jwt = require('express-jwt');
const jwtToken = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const User = require('./models/user');
const Todo = require('./models/todo');
const Goals = require('./models/goals');
const Post = require('./models/posts');
const TodoListModel = require("./models/todolist");
const NoteModel = require('./models/note');
const Token = require('./models/tokens');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'go2goal.today@gmail.com',
    pass: '6265417go2goal'
  }
});

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function (app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://' + config.AUTH0_DOMAIN + '/.well-known/jwks.json'
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: 'https://' + config.AUTH0_DOMAIN + '/',
    algorithm: 'RS256'
  });

  const bcrypt = require('bcrypt');
  const saltRounds = 10;

// GET USERS
  app.get('/api/users', function (req, res) {

    User.find({}, function (err, users) {
      let usersArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (users) {
        users.forEach(function (user) {
          usersArr.push(user);
        })
        ;
      }
      res.send(usersArr);
    });
  });


  // app.post('/api/login', function (req, res, next) {
  //   var username = req.body.username;
  //   var password = req.body.password;
  //   User.findOne({ username: username }, function(err, user) {
  //     if (err) throw err;
  //
  //     // test a matching password
  //     bcrypt.compare(password, user.password, function(err, isMatch) {
  //       if (err) throw err;
  //       if (isMatch) {
  //         res.send({result: true});
  //       } else {
  //         res.send({result: false});
  //       }
  //       console.log(user.password, isMatch); // -> Password123: true
  //     });
  //   });
  // });
  // POST USER
  app.post('/api/users', (req, res) => {
    // var password = req.body.password;
    // bcrypt.genSalt(saltRounds, function(err, salt) {
    //   bcrypt.hash(password, salt, function(err, hash) {
    var user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      goal_of_live: req.body.goal_of_live,
      goals_of_the_year: req.body.goals_of_the_year,
      goals_of_the_month: req.body.goals_of_the_month,
      goals_of_the_week: req.body.goals_of_the_week,
      datesW: req.body.datesW,
      datesM: req.body.datesM,
      datesY: req.body.datesY,
      first_level_steps: req.body.first_level_steps,
      todoLists: req.body.todoLists,
      notes: req.body.notes,
      posts: req.body.posts
    });
    user.save(function (err, user) {
      if (err) {
        return next(err)
      }
      res.status(201).json(user)
    });
    // });
    // });
  });

// GET USER BY ID
  app.get('/api/users/:id', function (req, res) {

    User.findById(req.params.id, function (err, user) {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!user) {
        return res.status(400).send({message: 'User not found.'});
      }
      res.send(user);
    });
  });

  app.put('/api/users/:id', (req, res) => {
    const userId = req.params.id;

    User.findById({_id: userId}, (err, user) => {

      user.username = req.body.username;
      user.email = req.body.email;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });

  // POST TODOLIST

  app.post('/api/users/:id/todolists', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      var todolist = new TodoListModel({
        title: req.body.title,
        isEdited: false,
        todos: [],
      });
      user.todoLists = user.todoLists.concat([todolist]);
      user.save(err => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.status(201).json(user)
      })
    });
  });

  // UPDATE TODOLIST
  app.put('/api/users/:id/todolists', function (req, res) {
    const userId = req.params.id;
    const todoLists = req.body.todoLists;

    User.findById({_id: userId}, (err, user) => {

      user.todoLists = todoLists;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });

  // POST NOTE
  app.post('/api/users/:id/notes', (req, res, next) => {
    User.findById(req.params.id, function (err, user) {
      var note = new NoteModel({
        title: req.body.title,
        isEdited: false,
      });
      user.notes = user.notes.concat([note]);
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.status(201).json(user);
      })
    });
  });

  // UPDATE NOTE
  app.put('/api/users/:id/notes', function (req, res, next) {
    const userId = req.params.id;
    const notes = req.body.notes;

    User.findById({_id: userId}, (err, user) => {

      user.notes = notes;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });

  // POST POST
  app.post('/api/users/:id/posts', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      var post = new Post({
        title: req.body.title,
        isEdited: false,
        postText: req.body.postText,
        upload: req.body.upload,
        author: req.body.author,
        date: req.body.date,
        category: req.body.category,
        likes: req.body.likes,
        favorites: req.body.favorites
      });
      user.posts = user.posts.concat([post]);
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.status(201).json(user);
      })
    });
  });

  app.put('/api/users/:id/newpass', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.password = req.body.password;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  app.put('/api/users/:id/posts', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.posts = req.body.posts;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  // POSTS

  app.get('/api/posts', function (req, res) {

    Post.find({}, function (err, posts) {
      let postsArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (posts) {
        posts.forEach(function (post) {
          postsArr.push(post);
        })
        ;
      }
      res.send(postsArr);
    });
  });

  app.post('/api/posts', (req, res) => {
    var post = new Post({
      title: req.body.title,
      isEdited: req.body.isEdited,
      postText: req.body.postText,
      upload: req.body.upload,
      author: req.body.author,
      date: req.body.date,
      category: req.body.category,
      likes: req.body.likes,
      favorites: req.body.favorites
    });
    post.save(function (err, post) {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      res.status(201).json(post)
    })
  });

  app.put('/api/posts/:id/', function (req, res) {
    const postId = req.params.id;
    Post.findById({_id: postId}, (err, post) => {
      post.title = req.body.title;
      post.postText = req.body.postText;
      post.upload = req.body.upload;
      post.category = req.body.category;
      post.likes = req.body.likes[0];
      post.save((err, post) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(post);
      });
    });
  });

  // DATES

  app.put('/api/users/:id/dates-year', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.datesY = req.body.datesY;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  app.put('/api/users/:id/dates-month', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.datesM = req.body.datesM;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  app.put('/api/users/:id/dates-week', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.datesW = req.body.datesW;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  // GOALS

  app.put('/api/users/:id/goals/goals-of-year', function (req, res) {
    const userId = req.params.id;
    User.findById({_id: userId}, (err, user) => {
      user.goals_of_the_year = req.body.goals_of_the_year;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });

  app.put('/api/users/:id/goals/goals-of-month', function (req, res) {
    const userId = req.params.id;
    User.findById({_id: userId}, (err, user) => {
      user.goals_of_the_month = req.body.goals_of_the_month;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });

  app.put('/api/users/:id/goals/goals-of-week', function (req, res) {
    const userId = req.params.id;
    User.findById({_id: userId}, (err, user) => {
      user.goals_of_the_week = req.body.goals_of_the_week;
      user.save((err, user) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });
  app.put('/api/users/:id/goals/goal-of-life', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.goal_of_live = req.body.goal_of_live;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });

  app.put('/api/users/:id/goals/first-level-steps', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      user.first_level_steps = req.body.first_level_steps;
      user.save(function (err) {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      })
    });
  });


  app.post('/api/reset-password', function (req, res, next) {
    if (req.body.email !== undefined) {
      let emailAddress = req.body.email;
      let id = req.body.id;
      let payload = {
        id: id,
        email: emailAddress
      };
      let token = jwtToken.sign(payload, 'secretString');
      let resetLink = "http://localhost:8083/reset-password/" + token;
      let sendToken = new Token({
        _id: req.body._id,
        user_id: req.body.id,
        token: token,
        link: resetLink
      });

      const mailOptions = {
        from: 'go2goal.today@gmail.com', // sender address
        to: emailAddress, // list of receivers
        subject: 'Reset Password Link', // Subject line
        html: '<p>Reset your password <a href=" ' + resetLink + '">Click the link</a></p>'// plain text body
      };

      sendToken.save(function (err, token) {
        if (err) {
          return next(err)
        }
        res.status(201).json(token)
        transporter.sendMail(mailOptions, function (err, info) {
          if (err)
            console.log(err);
        });
      })
    }
  });

  app.get('/api/reset-password', function (req, res) {

    Token.find({}, function (err, tokens) {
      let tokenArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (tokens) {
        tokens.forEach(function (token) {
          tokenArr.push(token);
        })
        ;
      }
      res.send(tokenArr);
    });
  });

  app.get('/api/reset-password/:token', function (req, res) {
    let tokenInRoute = req.params.token;
    let userArr = [];
    Token.find({}, function (err, tokens) {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (tokens) {
        tokens.find(function (token) {
          if (token.token === tokenInRoute) {
            let user_id = token.user_id;
            console.log(user_id);
            User.findById(user_id, function (err, user) {
              userArr.push(token);
              res.send(userArr);
            });
            // res.send(token);
          }
        });
      }
      // res.send(tokensArr);
    });
  });

};
