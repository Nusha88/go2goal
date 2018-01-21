// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// import {Todo} from "../src/app/models/todo.model";

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const User = require('./models/user');
const Todo = require('./models/todo');

/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://' + config.AUTH0_DOMAIN +'/.well-known/jwks.json'
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: 'https://' + config.AUTH0_DOMAIN + '/',
    algorithm: 'RS256'
  });

  /*
   |--------------------------------------
   | API Routes
   |--------------------------------------
   */

  // GET API root
//   app.get('/api/', (req, res) => {
//     res.send('API works');
// });

  app.get('/api/',function(req,res){
    res.send("Api works!");
  });

  app.get('/api/users', function (req, res) {

    User.find({}, function (err, users) {
      let usersArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (users) {
        users.forEach( function(user) {
          usersArr.push(user);
        })
        ;
      }
      res.send(usersArr);
    });
  });

  // app.post('/api/go2users', function (req, res, next) {
  //   var post = new User({
  //     username: req.body.username,
  //     email: req.body.email,
  //     password: req.body.password,
  //     // goL: req.body.goL,
  //     // todos: req.body.todos
  //   });
  //   post.save(function (err, post) {
  //     if (err) { return next(err) }
  //     res.status(201).json(post)
  //   })
  // });
  // app.post('/api/users', function (req, res, next) {
  //   var post = new User({
  //     username: req.body.username,
  //     password: req.body.password,
  //     user_id: req.body.user_id,
  //     todos: '[]',
  //     goL: ''
  //   })
  //   post.save(function (err, post) {
  //     if (err) { console.log(next(err))}
  //     res.status(201).json(post);
  //     console.log(post);
  //   })
  // });

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

  app.get('/api/users/:userId/todos', (req, res) => {
    Todo.find({userId: req.params.user_id}, (err, todos) => {
      let todosArr = [];
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (todos) {
        todos.forEach(todo => {
          todosArr.push(todo);
        });
      }
      res.send(todosArr);
    });
  });

  app.post('/api/users', (req, res) => {
      var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        goL: '',
        todos: ''
      });
    user.save(function (err, user) {
          if (err) { return next(err) }
          res.status(201).json(user)
        })
  });

  app.put('/api/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!user) {
        return res.status(400).send({message: 'User not found.'});
      }
      user.name = req.body.username;
      user.email = req.body.email;
      user.password = req.body.password;
      user.goL = req.body.goL;
      user.todos = [];

      user.save(err => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        res.send(user);
      });
    });
  });


};
