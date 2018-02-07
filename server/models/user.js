const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SecondLevelSteps = new Schema({
  name: String
});
const FirstLevelSteps = new Schema({
  name: String,
  second_level_step: [SecondLevelSteps]
});
const ThirdLevelSteps = new Schema({
  _id: String,
  name: String
});
const GoalOfYear = new Schema({
  _id: String,
  name: String
});
const GoalOfMonth = new Schema({
  _id: String,
  name: String
});
const GoalOfWeek = new Schema({
  _id: String,
  name: String
});

const goalsSchema = new Schema({
  // id: String,
  goal_of_live: String,
  first_level_steps: [FirstLevelSteps],
  second_level_steps: [SecondLevelSteps],
  // third_level_steps: [ThirdLevelSteps],
  // goals_of_year: [GoalOfYear],
  // goals_of_month: [GoalOfMonth],
  // goals_of_week: [GoalOfWeek],
});
var todos = new Schema({
  title: String,
  complete: Boolean,
})

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  goals:
    {
      goal_of_live: String,
      first_level_steps: String
    },
  todos: [todos],
}, {collection: 'go2users'});

module.exports = mongoose.model('User', userSchema);



