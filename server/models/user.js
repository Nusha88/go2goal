
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let fthls = new Schema({
  index: String,
  title: String,
  fifth_level_steps: Array
});
let tls = new Schema({
  index: String,
  title: String,
  fourth_level_steps: [fthls]
});
let sls = new Schema({
  index: String,
  title: String,
  third_level_steps: [tls]
});
let fls = new Schema({
  index: String,
  title: String,
  second_level_steps: [sls]
});

let datesY = new Schema({
  from: String,
  to: String
});
let datesM = new Schema({
  from: String,
  to: String
});
let datesW = new Schema({
  from: String,
  to: String
});
let goals_of_the_year = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  complete: Boolean
});
let goals_of_the_month = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  complete: Boolean
});
let goals_of_the_week = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  complete: Boolean
});
let gol = new Schema({
  index: String,
  title: String
})
let todos = new Schema({
  title: String,
  isEdited: Boolean,
  complete: Boolean,
});

let todoLists = new Schema({
  title: String,
  isEdited: Boolean,
  todos: [todos],
});
let notes = new Schema({
  _id: String,
  title: String,
  isEdited: Boolean
});
let liker = new Schema({
  username: String,
  isLike: Boolean
});
let likes = new Schema({
  count: Number,
  likers: [liker]
});
let posts = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  postText: String,
  upload: String,
  author: String,
  date: String,
  category: String,
  likes: [likes],
  favorites: []
});

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  todoLists: [todoLists],
  notes: [notes],
  posts: [posts],
  datesY: [datesY],
  datesM: [datesM],
  datesW: [datesW],
  goal_of_live: [gol],
  first_level_steps: [fls],
  goals_of_the_year: [goals_of_the_year],
  goals_of_the_month: [goals_of_the_month],
  goals_of_the_week: [goals_of_the_week]

}, {collection: 'go2users'});

module.exports = mongoose.model('User', userSchema, 'go2users');



