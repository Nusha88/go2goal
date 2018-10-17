// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */


const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const User = require('./models/user');
const Todo = require('./models/todo');
const Goals = require('./models/goals');
const Post = require('./models/posts');
const TodoListModel = require("./models/todolist");
const NoteModel = require('./models/note');

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
  // POST USER
  app.post('/api/users', (req, res) => {
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
    })
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

  // app.get('/api/users/:id/todos', function (req, res) {
  //
  //   User.findById(req.params.id, function (err, user) {
  //     if (err) {
  //       return res.status(500).send({message: err.message});
  //     }
  //     if (!user) {
  //       return res.status(400).send({message: 'User not found.'});
  //     }
  //     res.send(user.todos);
  //   });
  // });

  // app.post('/api/users/:id/todos', (req, res) => {
  //   User.findById(req.params.id, function (err, user) {
  //     var todo = new Todo({
  //       id: req.body.id,
  //       title: req.body.title,
  //       complete: req.body.complete
  //     });
  //     user.todos.push(todo);
  //     user.save(function (err) {
  //       if (err) {
  //         return next(err)
  //       }
  //       res.status(201).json(user);
  //     })
  //   });
  // });

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
  app.put('/api/users/:id/todolists', function(req, res) {
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
  app.put('/api/users/:id/notes', function(req, res, next) {
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

//   app.put('/api/users/:id/posts', function(req, res) {
//     const userId = req.params.id;
//     const posts = req.body.posts;
//     User.findById({_id: userId}, (err, user) => {
// console.log(posts);
//       user.posts = posts;
//       user.save((err, user) => {
//         if (err) {
//           return res.status(500).send({message: err.message});
//         }
//         res.send(user);
//       });
//     });
//   });

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

  app.put('/api/posts/:id/', function(req, res) {
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

  app.put('/api/users/:id/goals/goals-of-year', function(req, res) {
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

  app.put('/api/users/:id/goals/goals-of-month', function(req, res) {
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

  app.put('/api/users/:id/goals/goals-of-week', function(req, res) {
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

};
