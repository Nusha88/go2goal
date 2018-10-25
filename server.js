// server.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
// Config
const config = require('./server/config');

/*
 |--------------------------------------
 | MongoDB
 |--------------------------------------
 */
mongoose.Promise = require('bluebird');
mongoose.connect(config.MONGO_URI, { useMongoClient: true });
const monDb = mongoose.connection;

monDb.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that', config.MONGO_URI, 'is running.');
});

monDb.once('open', function callback() {
  console.info('Connected to MongoDB:');
});

/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(cors());

// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.use('/', express.static(path.join(__dirname, 'dist', 'index.html')));
}

/*
 |--------------------------------------
 | Routes
 |--------------------------------------
 */

require('./server/api')(app, config);

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.get('*', function(req, res) {
    const index = path.join(__dirname, 'dist', 'index.html');
    console.log(index);
    res.sendFile(index);
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.get('/*', function(req, res){
  const index = path.join(__dirname, 'dist', 'index.html');
  res.sendFile(index);
});

app.listen(port, function () {
  console.log("Server running on localhost:" + port);
});
