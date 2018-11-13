const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  id: String,
  text: String,
  username: String
}, { collection : 'reviews' });

module.exports = mongoose.model('Review', reviewSchema, 'reviews');
