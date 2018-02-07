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

  /*
   |--------------------------------------
   | API Routes
   |--------------------------------------
   */

  app.get('/api/', function (req, res) {
    res.send("Api works!");
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
      goals: req.body.goals,
      todos: '',
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

  app.get('/api/users/:id/todos', function (req, res) {

    User.findById(req.params.id, function (err, user) {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!user) {
        return res.status(400).send({message: 'User not found.'});
      }
      res.send(user.todos);
    });
  });

  app.post('/api/users/:id/todos', (req, res) => {
    User.findById(req.params.id, function (err, user) {
      var todo = new Todo({
        id: req.body.id,
        title: req.body.title,
        complete: req.body.complete
      });
      user.todos.push(todo);
      user.save(function (err) {
        if (err) {
          return next(err)
        }
        res.status(201).json(user);
        console.log(user);
      })
    });
  });

  app.put('/api/users/:id/todos', function(req, res) {
    const userId = req.params.id;
    const todos = req.body;
    console.log('update');
    User.findById({_id: userId}, todos, (err, user) => {
      user.todos.push(todos);
      console.log(todos);

      user.save((err, user) => {
        if (err) {
          return next(err);
        }
        console.log(user);
        res.send(todos);
      });
    });
  });
//
//   app.put('/api/users/:id/todos', function (req, res) {
//     const userId = req.params.id;
//     const todos = req.body;
//     console.log(todos);
//     User.findById({_id: userId}, todos)
//       .then(() => User.findById({_id: userId}))
//       .then(user =>{
//         console.log(user.todos);
//         res.send(user.todos);
//       })
//       .catch(err);
//   });
// // PUT TODOS

};
