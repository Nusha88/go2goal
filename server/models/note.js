const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  id: String,
  title: String,
  isEdited: Boolean
}, { collection : 'go2users' });

module.exports = mongoose.model('Note', noteSchema);
