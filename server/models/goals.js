const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const goalsSchema = new Schema({
  id: String,
  goal_of_live: String,
  first_level_steps: Array,
  goals_of_the_year: Array,
}, { collection : 'go2users' });

module.exports = mongoose.model('Goals', goalsSchema);
