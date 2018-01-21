const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  id: String,
  title: String,
  complite: Boolean,
}, { collection : 'go2users' });

module.exports = mongoose.model('Todo', todoSchema);
