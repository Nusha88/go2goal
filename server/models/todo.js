const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  complete: Boolean,
}, { collection : 'go2users' });

module.exports = mongoose.model('Todo', todoSchema);
