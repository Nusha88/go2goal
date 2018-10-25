const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  user_id: {type: String},
  token: {type: String, required: true},
  link: {type: String, required: true}
}, {collection: 'tokens'});

module.exports = mongoose.model('Token', tokenSchema);
