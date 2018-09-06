const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  _id: String,
  title: String,
  isEdited: Boolean
}, { collection : 'go2users' });

module.exports = mongoose.model('Note', noteSchema);
