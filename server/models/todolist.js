const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  todos: Array
}, { collection : 'go2users' });

module.exports = mongoose.model('TodoList', todoListSchema);
