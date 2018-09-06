const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let liker = new Schema({
  username: String,
  isLike: Boolean
});
let likes = new Schema({
  count: Number,
  likers: [liker]
});

const postsSchema = new Schema({
  id: String,
  title: String,
  isEdited: Boolean,
  postText: String,
  upload: String,
  author: String,
  date: String,
  category: String,
  likes: [likes],
  favorites: Array
}, { collection : 'posts' });

module.exports = mongoose.model('Post', postsSchema, 'posts');
