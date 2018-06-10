
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var tls = new Schema({
  index: String,
  title: String,
  third_level_steps: Array
});
var sls = new Schema({
  index: String,
  title: String,
  third_level_steps: [tls]
});
var fls = new Schema({
  index: String,
  title: String,
  second_level_steps: [sls]
});
var goals = new Schema({
  id: String,
  goal_of_live: String,
  first_level_steps: [fls]
});

var todos = new Schema({
  id: String,
  title: String,
  complete: Boolean,
});

var todoLists = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  todos: [todos],
});

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  goals: [goals],
  todoLists: [todoLists],
}, {collection: 'go2users'});

module.exports = mongoose.model('User', userSchema, 'go2users');



