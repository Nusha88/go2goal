const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    goL: String,
    todos: Array
}, { collection : 'go2users' });

module.exports = mongoose.model('User', userSchema);
