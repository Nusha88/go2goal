const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  postText: String,
  upload: String,
  author: String,
  date: String,
  category: String,
  likes: Array,
  favorites: Array
}, { collection : 'posts' });

module.exports = mongoose.model('Post', postsSchema, 'posts');
