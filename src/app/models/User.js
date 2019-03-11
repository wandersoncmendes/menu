const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);